const SPOTIFY_DATA = {

  /* PROFIL */
  profile: {
    name: "Swifttdell",
    image: "img/profil-spotify.webp",
    url: "https://open.spotify.com/playlist/0uCBJpmjHGf9B6LxFhUXml?si=46ac9cfa2c494c65&pt=0d2286e34add80cb541addb6fcebdef6",
  },

  /* STATISTIK */
  stats: {
    playlists:  2,
    likedSongs:173,
    topArtists: 5,
  },

/* Playlist*/
  playlists: [
    {
      id:    "playlist-1",
      name:  "My playlist",
      total: 39,
      image: "img/Pegatinas_ Xxxtentacion.webp",
      url:   "https://open.spotify.com/playlist/4o4g8INbSjEKDfF8oWDnAM?si=df6deb1320614ad0&pt=b8af2caf51c3b4308cb9ebd47d04d700",
    },
    {
      id:    "playlist-2",
      name:  "MOOD",
      total: 10,
      image: "img/playlist-2.webp",
      url:   "https://open.spotify.com/playlist/2fBCDyydzdN9Pt1iqbJLRV?si=26834334f38a494a&pt=1198dcf4ece6b4a1d6027591b3c44207",
    },
  ],

  /* LAGU YANG DISUKAI */
  likedSongs: [
    {
      id:       "track-1",
      title:    "White Ferrari",
      
      artist:   "Frank Ocean",
      image:    "img/spotify-lagu/white ferrari, frank ocean.webp",
      url:      "https://open.spotify.com/intl-id/track/2LMkwUfqC6S6s6qDVlEuzV?si=24931b55f98b405b",
      duration: "4:09",
    },
    {
      id:       "track-2",
      title:    "Mesra-mesraanya Kecil-kecilan dulu",
      artist:   "Sal Priadi",
      image:    "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02680f1025f6619c42a3c23864",
      url:      "https://open.spotify.com/track/3TW8XLF8PyA3kFsV1l5713",
      duration: "3:30",
    },
    {
      id:       "track-3",
      title:    "Guilty as Sin?",
      artist:   "Taylor Swift",
      image:    "img/spotify-lagu/TaylorSwift.webp",
      url:      "https://open.spotify.com/intl-id/track/0W0iAC1VGlB82PI6elxFYf?si=ca7f39ddf3764bb2",
      duration: "4:14",
    },
    {
      id:       "track-4",
      title:    "HEARTACHE (SHALL NOT SURVIVE)",
      artist:   "Bin Idris",
      image:    "img/spotify-lagu/Heartache.webp",
      url:      "https://open.spotify.com/intl-id/track/1SYkyZa7sjDxw96S4Yd2z1?si=8350647270844b6d",
      duration: "3:46",
    },
    {
      id:       "track-5",
      title:    "berlin",
      artist:   "Kendis",
      image:    "img/spotify-lagu/berlin.webp",
      url:      "https://open.spotify.com/intl-id/track/716EFADuhOuYUCLRltcwnC?si=2d554ea7c8f54c1b",
      duration: "3:36",
    },
  ],

  /* ARTIS FAVORIT */
  topArtists: [
    {
      id:    "artist-1",
      name:  "One Direction",
      genre: "Pop",
      image: "img/spotify-artis/one-direction-profil.webp",
      url:   "https://open.spotify.com/artist/4AK6F7OLvEQ5QYCBNiQWHq",
    },
    {
      id:    "artist-2",
      name:  "Westlife",
      genre: "Pop",
      image: "img/spotify-artis/westlife-profil.webp",
      url:   "https://open.spotify.com/artist/3GwtnkyBVM6sMPfVfmFOhG",
    },
    {
      id:    "artist-3",
      name:  "Bruno Mars",
      genre: "Pop",
      image: "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd",
      url:   "https://open.spotify.com/artist/0du5cEVh5yTK9QJze8zA0C",
    },
    {
      id:    "artist-4",
      name:  "The Jeblogs",
      genre: "Garage Punk",
      image: "img/spotify-artis/Thejeblogs.webp",
      url:   "https://open.spotify.com/intl-id/artist/2uGEBoKHco8L9Pbq99iXmv?si=93idnVNLRkS8hfbY73XH0Q",
    },
    {
      id:    "artist-5",
      name:  "Justin Beiber",
      genre: "Pop",
      image: "img/spotify-artis/justin-beiber-profile.webp",
      url:   "https://open.spotify.com/intl-id/artist/1uNFoZAHBGtllmzznpCI3s?si=ka9UkNbWR8Sp_-VzbNREEA",
    },
    {
      id:    "artist-6",
      name:  "Mahalini",
      genre: "Pop",
      image: "img/spotify-artis/mahalini-profile.webp",
      url:   "https://open.spotify.com/intl-id/artist/3wOsYKZM0zcKNasi3I7fP4?si=tNxxNayhQu6ofoBL_EbbWg",
    },
    {
      id:    "artist-7",
      name:  "Adele",
      genre: "Pop",
      image: "img/spotify-artis/adele-profile.webp",
      url:   "https://open.spotify.com/intl-id/artist/3wOsYKZM0zcKNasi3I7fP4?si=tNxxNayhQu6ofoBL_EbbWg",
    },
    {
      id:    "artist-8",
      name:  "Oasis",
      genre: "Rock",
      image: "img/spotify-artis/oasis-profile.webp",
      url:   "https://open.spotify.com/intl-id/artist/2DaxqgrOhkeH0fpeiQq2f4?si=W8AeZmzTTY-j-cflZjWtBA",
    },
    {
      id:    "artist-9",
      name:  "Avenged Sevenfold",
      genre: "Rock",
      image: "img/spotify-artis/a7x-profile.webp",
      url:   "https://open.spotify.com/intl-id/artist/0nmQIMXWTXfhgOBdNzhGOs?si=uZIS5sHJQhWVTs5iGnTzng",
    },
    {
      id:    "artist-10",
      name:  "Taylor Swift",
      genre: "Country",
      image: "img/spotify-artis/taylor-swift.webp",
      url:   "spotify:artist:06HL4z0CvFAxyc27GXpf02",
    },
    {
      id:"artist-11",
      name:"Rex Orange County",
      genre:"Pop",
      image:"img/spotify-artis/Rex Orange County .webp",
      url:"https://open.spotify.com/intl-id/artist/7pbDxGE6nQSZVfiFdq9lOL?si=lDEYPVRbRmehMmYv4dJHbA",
    },
    {
      id:"artist-12",
      name:"Ed Sheeran",
      genre:"Pop",
      image: "img/spotify-artis/Love love love this song.webp",
      url:"https://open.spotify.com/intl-id/artist/6eUKZXaKkcviH0Ku9w2n3V?si=AOUKyzAKR2ONM2jjKrzmtw",
    },
  ],
};