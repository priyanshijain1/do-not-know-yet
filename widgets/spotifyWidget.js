function createSpotifyWidget(x, y, z) {
  const el = document.createElement("div");
  el.className = "widget spotify-mini-player";

  el.innerHTML = `
    <div class="player-left">
      <img class="album-art" />
    </div>

    <div class="player-center">
      <p class="track-name"></p>
      <p class="artist-name"></p>
    </div>

    <div class="player-right">
      <span class="icon prev">⏮</span>
      <span class="icon play">⏸</span>
      <span class="icon next">⏭</span>
    </div>
  `;

  const albumArt = el.querySelector(".album-art");
  const trackName = el.querySelector(".track-name");
  const artistName = el.querySelector(".artist-name");
  const playIcon = el.querySelector(".play");

  async function updatePlayer() {
    try {
      const res = await fetch("http://127.0.0.1:3001/spotify/recently-played");

      const data = await res.json();

      if (!data) {
        trackName.textContent = "Not playing";
        artistName.textContent = "";
        playIcon.textContent = "▶";
        return;
      }

      albumArt.src = data.albumArt;
      trackName.textContent = data.title;
      artistName.textContent = data.artist;
      playIcon.textContent = data.isPlaying ? "⏸" : "▶";
    } catch {
      trackName.textContent = "Spotify unavailable";
    }
  }

  updatePlayer();
  setInterval(updatePlayer, 15000);

  place(el, x, y, z);
  document.getElementById("canvas").appendChild(el);
}
