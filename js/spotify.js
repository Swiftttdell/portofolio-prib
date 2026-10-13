/* Helper SVG  */
function musicSVG() {
  return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`;
}

function userSVG() {
  return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
}

function heartSVG() {
  return `<svg width="13" height="13" viewBox="0 0 24 24" fill="#1DB954" stroke="#1DB954" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`;
}

/* Render: Profil  */
function renderProfile(profile, stats) {
  const el = document.getElementById("sp-profile");
  if (!el) return;

  el.innerHTML = `
    <div class="sp-profile-avatar">
      ${profile.image
        ? `<img src="${profile.image}" alt="${profile.name}" loading="lazy">`
        : userSVG()}
    </div>
    <div class="sp-profile-info">
      <p class="sp-profile-name">${profile.name}</p>
      <p class="sp-profile-handle">Spotify Profile</p>
      <div class="sp-profile-stats">
        <div>
          <div class="sp-profile-stat-val">${stats.playlists}</div>
          <div class="sp-profile-stat-lbl">Playlist</div>
        </div>
        <div>
          <div class="sp-profile-stat-val">${stats.likedSongs}</div>
          <div class="sp-profile-stat-lbl">Lagu Disukai</div>
        </div>
        <div>
          <div class="sp-profile-stat-val">${stats.topArtists}</div>
          <div class="sp-profile-stat-lbl">Artis Favorit</div>
        </div>
      </div>
    </div>
  `;
}

/* Render: Playlist */
function renderPlaylists(playlists) {
  const el      = document.getElementById("sp-playlists");
  const countEl = document.getElementById("sp-playlists-count");
  if (!el) return;

  if (countEl) countEl.textContent = playlists.length + " playlist";

  if (!playlists.length) {
    el.innerHTML = `<p class="sp-error">Belum ada playlist.</p>`;
    return;
  }

  el.innerHTML = `<div class="sp-playlist-grid">
    ${playlists.map(p => `
      <a class="sp-playlist-item" href="${p.url}" target="_blank" rel="noreferrer">
        <div class="sp-playlist-art">
          ${p.image
            ? `<img src="${p.image}" alt="${p.name}" loading="lazy">`
            : playlistPlaceholder(p.name)}
        </div>
        <p class="sp-playlist-name">${p.name}</p>
        <p class="sp-playlist-meta">${p.total} lagu</p>
      </a>
    `).join("")}
  </div>`;
}

/* Placeholder gradient untuk cover playlist yang belum ada fotonya */
function playlistPlaceholder(name) {
  const palettes = [
    ["#1DB954", "#157a3a"],
    ["#2d46b9", "#1a2a7a"],
    ["#e91429", "#8b0d1a"],
    ["#8e67ac", "#5a3d70"],
  ];
  const idx = name.charCodeAt(0) % palettes.length;
  const [c1, c2] = palettes[idx];
  const uid = "pg_" + idx + "_" + Math.random().toString(36).slice(2, 6);
  return `
    <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${c1}"/>
          <stop offset="100%" stop-color="${c2}"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#${uid})"/>
      <text x="50" y="58" font-size="32" text-anchor="middle" fill="rgba(255,255,255,0.65)">&#9836;</text>
    </svg>`;
}

/* Render: Lagu Disukai */
function renderLikedSongs(songs) {
  const el      = document.getElementById("sp-liked-songs");
  const countEl = document.getElementById("sp-liked-count");
  if (!el) return;

  if (countEl) countEl.textContent = songs.length + " lagu";

  if (!songs.length) {
    el.innerHTML = `<p class="sp-error">Belum ada lagu yang disukai.</p>`;
    return;
  }

  el.innerHTML = `<div class="sp-track-list">
    ${songs.map((t, i) => `
      <a class="sp-track" href="${t.url}" target="_blank" rel="noreferrer">
        <span class="sp-track-num">${i + 1}</span>
        <div class="sp-track-art">
          ${t.image
            ? `<img src="${t.image}" alt="${t.title}" loading="lazy">`
            : musicSVG()}
        </div>
        <div class="sp-track-info">
          <p class="sp-track-name">${t.title}</p>
          <p class="sp-track-artist">${t.artist}</p>
          ${t.lyrics ? `<p class="sp-track-lyrics">${t.lyrics}</p>` : ""}
        </div>
        <span class="sp-track-heart">${heartSVG()}</span>
        <span class="sp-track-dur">${t.duration}</span>
      </a>
    `).join("")}
  </div>`;
}

/* Render: Artis Favorit */
function renderTopArtists(artists) {
  const el      = document.getElementById("sp-top-artists");
  const countEl = document.getElementById("sp-artists-count");
  if (!el) return;

  if (countEl) countEl.textContent = artists.length + " artis";

  if (!artists.length) {
    el.innerHTML = `<p class="sp-error">Belum ada data.</p>`;
    return;
  }

  el.innerHTML = `<div class="sp-artist-grid">
    ${artists.map(a => `
      <a class="sp-artist-item" href="${a.url}" target="_blank" rel="noreferrer">
        <div class="sp-artist-avatar">
          ${a.image
            ? `<img src="${a.image}" alt="${a.name}" loading="lazy">`
            : userSVG()}
        </div>
        <p class="sp-artist-name">${a.name}</p>
        <p class="sp-artist-genre">${a.genre || "—"}</p>
      </a>
    `).join("")}
  </div>`;
}

/* Inisialisasi */
function loadSpotifyData() {
  if (typeof SPOTIFY_DATA === "undefined") {
    console.error("[Spotify] SPOTIFY_DATA tidak ditemukan. Pastikan spotify-data.js sudah di-load.");
    return;
  }

  const { profile, stats, playlists, likedSongs, topArtists } = SPOTIFY_DATA;

  renderProfile(profile, stats);
  renderPlaylists(playlists   || []);
  renderLikedSongs(likedSongs || []);
  renderTopArtists(topArtists || []);
}

function initSpotify() {
  const page = document.getElementById("page-links");
  if (!page) return;

  if (page.classList.contains("active")) {
    loadSpotifyData();
    return;
  }

  const observer = new MutationObserver(() => {
    if (page.classList.contains("active")) {
      loadSpotifyData();
      observer.disconnect();
    }
  });

  observer.observe(page, { attributes: true, attributeFilter: ["class"] });
}

function initSpotifyAutoplay() {
  const previewDurationMs = 30000;
  const player = document.getElementById("sp-autoplay-player");
  const status = document.getElementById("sp-autoplay-status");
  const playButton = document.getElementById("sp-autoplay-button");
  const songs = typeof SPOTIFY_DATA === "undefined" ? [] : SPOTIFY_DATA.likedSongs || [];
  const tracks = songs.map((song) => {
    const match = song.url.match(/track\/([a-zA-Z0-9]+)/);
    return match ? { ...song, uri: `spotify:track:${match[1]}` } : null;
  }).filter(Boolean);

  const firstTrack = tracks[0];

  if (!player || !status || !playButton || !firstTrack) {
    console.error("[Spotify] Pemutar otomatis tidak dapat dimulai: data lagu atau elemen pemutar tidak ditemukan.");
    if (status) status.textContent = "Pemutar Spotify tidak dapat dimuat.";
    return;
  }

  let currentTrackIndex = 0;
  let advancing = false;
  let playbackTimer;

  function trackDurationMs(track) {
    const match = track.duration.match(/^(\d+):(\d{2})$/);
    return match ? (Number(match[1]) * 60 + Number(match[2])) * 1000 : 0;
  }

  function scheduleTrackEnd(controller, duration, position = 0) {
    clearTimeout(playbackTimer);
    if (!duration) {
      const fallbackDuration = trackDurationMs(tracks[currentTrackIndex]);
      if (!fallbackDuration) {
        console.error(`[Spotify] Durasi lagu tidak tersedia: ${tracks[currentTrackIndex].title}`);
        status.textContent = `Durasi lagu tidak tersedia: ${tracks[currentTrackIndex].title}.`;
        return;
      }
      duration = fallbackDuration;
    }

    const remaining = duration - position;
    if (remaining <= 1000) {
      advanceTrack(controller);
      return;
    }

    playbackTimer = setTimeout(() => advanceTrack(controller), remaining - 1000);
  }

  window.onSpotifyIframeApiReady = (IFrameAPI) => {
    IFrameAPI.createController(player, {
      uri: firstTrack.uri,
      width: "100%",
      height: 152,
      theme: "dark",
    }, (controller) => {
      playButton.disabled = false;
      playButton.addEventListener("click", () => {
        status.textContent = "Mencoba memutar lagu...";
        controller.resume();
      });
      status.textContent = "Mencoba memutar lagu favorit. Jika tidak mulai, tekan Putar lagu.";
      controller.addListener("playback_started", (event) => {
        const trackIndex = tracks.findIndex((track) => track.uri === event.data.playingURI);
        if (trackIndex >= 0) currentTrackIndex = trackIndex;
        advancing = false;
        status.textContent = `Sedang diputar: ${tracks[currentTrackIndex].title} — ${tracks[currentTrackIndex].artist}`;
        playButton.hidden = true;
      });
      controller.addListener("playback_update", (event) => {
        const playback = event.data;
        if (advancing) return;

        if (playback.isPaused) {
          clearTimeout(playbackTimer);
          if (playback.position >= previewDurationMs - 1000 && playback.duration > playback.position + 1000) {
            advanceTrack(controller);
            return;
          }
          if (playback.duration && playback.position < playback.duration - 1000) {
            status.textContent = `Dijeda: ${tracks[currentTrackIndex].title} — ${tracks[currentTrackIndex].artist}`;
            playButton.hidden = false;
          }
          return;
        }
        if (playback.isBuffering) {
          clearTimeout(playbackTimer);
          return;
        }

        scheduleTrackEnd(controller, playback.duration, playback.position);
      });
      controller.play();
    });
  };

  function advanceTrack(controller) {
    if (advancing) return;
    clearTimeout(playbackTimer);

    advancing = true;
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    const nextTrack = tracks[currentTrackIndex];
    status.textContent = `Lagu berikutnya: ${nextTrack.title} — ${nextTrack.artist}`;
    playButton.hidden = true;
    if (typeof controller.loadEntity === "function") {
      controller.loadEntity(nextTrack.uri);
    } else {
      controller.loadUri(nextTrack.uri);
    }
    controller.play();
  }

  const script = document.createElement("script");
  script.src = "https://open.spotify.com/embed/iframe-api/v1";
  script.async = true;
  script.onerror = () => {
    console.error("[Spotify] Gagal memuat iFrame API Spotify.");
    status.textContent = "Pemutar Spotify gagal dimuat. Coba buka Spotify melalui tombol di atas.";
  };
  document.body.appendChild(script);
}

document.addEventListener("DOMContentLoaded", () => {
  initSpotify();
  initSpotifyAutoplay();
});