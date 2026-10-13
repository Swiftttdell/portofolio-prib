const CLIENT_ID     = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const BASIC = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");
const TOKEN_URL = "https://accounts.spotify.com/api/token";
const API_BASE  = "https://api.spotify.com/v1";

async function getAccessToken() {
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${BASIC}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type:    "refresh_token",
      refresh_token: REFRESH_TOKEN,
    }).toString(),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Token error ${res.status}: ${text}`);
  }

  return res.json();
}

async function sp(path, token) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (res.status === 204 || res.status === 404) return null;
  if (!res.ok) return null;
  return res.json();
}

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
      throw new Error("Environment variables belum di-set.");
    }

    const { access_token } = await getAccessToken();

    if (req.query.artistIds) {
      const artistIds = [...new Set(String(req.query.artistIds).split(","))];
      if (
        artistIds.length > 20
        || artistIds.some((id) => !/^[A-Za-z0-9]{22}$/.test(id))
      ) {
        return res.status(400).json({ error: "Daftar ID artis tidak valid." });
      }

      const artistTrackResults = await Promise.all(artistIds.map(async (artistId) => {
        const response = await fetch(
          `${API_BASE}/artists/${artistId}/top-tracks?market=ID`,
          { headers: { Authorization: `Bearer ${access_token}` } },
        );
        if (!response.ok) {
          throw new Error(`Spotify artist tracks error ${response.status}.`);
        }
        return response.json();
      }));

      const artistTracks = artistTrackResults
        .flatMap((result) => result.tracks || [])
        .filter((track) => track.id && track.is_playable !== false)
        .map((track) => ({
          id: track.id,
          uri: track.uri,
          title: track.name,
          artist: track.artists.map((artist) => artist.name).join(", "),
          url: track.external_urls.spotify,
          duration: track.duration_ms,
        }));
      const uniqueArtistTracks = [...new Map(
        artistTracks.map((track) => [track.id, track]),
      ).values()];

      res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=86400");
      return res.status(200).json({ artistTracks: uniqueArtistTracks });
    }

    const [
      profile,
      nowPlaying,
      recentlyPlayed,
      topTracks,
      topArtists,
      playlists,
      likedSongs,
    ] = await Promise.all([
      sp("/me", access_token),
      sp("/me/player/currently-playing", access_token),
      sp("/me/player/recently-played?limit=5", access_token),
      sp("/me/top/tracks?limit=10&time_range=short_term", access_token),
      sp("/me/top/artists?limit=8&time_range=short_term", access_token),
      sp("/me/playlists?limit=6", access_token),
      sp("/me/tracks?limit=10", access_token),
    ]);

    // Now Playing atau fallback ke recently played
let nowPlayingData = null;
    if (nowPlaying && nowPlaying.item) {
      nowPlayingData = {
        isPlaying: !!nowPlaying.is_playing,
        title:     nowPlaying.item.name || "Unknown Track",
        artist:    nowPlaying.item.artists?.map((a) => a.name).join(", ") || "Unknown Artist",
        album:     nowPlaying.item.album?.name || "Unknown Album",
        image:     nowPlaying.item.album?.images?.[1]?.url || null,
        url:       nowPlaying.item.external_urls?.spotify || "#",
        progress:  nowPlaying.progress_ms || 0,
        duration:  nowPlaying.item.duration_ms || 0,
      };
    } else if (recentlyPlayed?.items?.length > 0) {
      const track = recentlyPlayed.items[0].track;
      nowPlayingData = {
        isPlaying: false,
        title:     track.name || "Unknown Track",
        artist:    track.artists?.map((a) => a.name).join(", ") || "Unknown Artist",
        album:     track.album?.name || "Unknown Album",
        image:     track.album?.images?.[1]?.url || null,
        url:       track.external_urls?.spotify || "#",
      };
    }

    const data = {
      profile: {
        name:      profile?.display_name || "AanSwift",
        image:     profile?.images?.[0]?.url || null,
        url:       profile?.external_urls?.spotify || "https://open.spotify.com/user/31fm4l3w7nyqbx3py7c6sbaebng4?si=8d7e659f23c440e9",
        followers: profile?.followers?.total || 0,
      },
      nowPlaying: nowPlayingData,
      playlists: (playlists?.items || []).map((p) => ({
        id:    p.id,
        name:  p.name,
        total: p.tracks?.total || 0,
        image: p.images?.[0]?.url || null,
        url:   p.external_urls?.spotify,
      })),
      likedSongs: (likedSongs?.items || []).map(({ track: t }) => ({
        id:       t.id,
        title:    t.name,
        artist:   t.artists.map((a) => a.name).join(", "),
        image:    t.album.images[2]?.url || null,
        url:      t.external_urls.spotify,
        duration: t.duration_ms,
      })),
      topTracks: (topTracks?.items || []).map((t) => ({
        id:       t.id,
        title:    t.name,
        artist:   t.artists.map((a) => a.name).join(", "),
        image:    t.album.images[2]?.url || null,
        url:      t.external_urls.spotify,
        duration: t.duration_ms,
      })),
      topArtists: (topArtists?.items || []).map((a) => ({
        id:        a.id,
        name:      a.name,
        genre:     a.genres?.[0] || "",
        image:     a.images?.[2]?.url || a.images?.[0]?.url || null,
        url:       a.external_urls.spotify,
        followers: a.followers?.total || 0,
      })),
    };

    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=30");
    return res.status(200).json(data);

  } catch (err) {
    console.error("[Spotify API Error]", err.message);
    return res.status(500).json({ error: err.message });
  }
};