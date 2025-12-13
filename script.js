(function initCuriosityModule() {
  const root = document.getElementById("curiosity-module");
  if (!root) return;

  fetch("data.json")
    .then(res => res.json())
    .then(data => renderCuriosities(data))
    .catch(err => console.error("Failed to load data:", err));
})();


function renderCuriosities(items) {
  const list = document.querySelector(".curiosity-list");

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "curiosity-card";

    card.innerHTML = `
      <h3>${item.topic}</h3>
      <p>${item.why}</p>
      <div class="meta">
        <span>${item.depth}</span>
        <span>· ${item.source}</span>
      </div>
    `;

    list.appendChild(card);
  });
}
