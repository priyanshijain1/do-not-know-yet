function createRandomFactWidget(x, y, z) {
  const facts = [
    "Octopuses have three hearts.",
    "Honey never spoils.",
    "Bananas are berries.",
    "Venus rotates backwards."
  ];

  const el = document.createElement("div");
  el.className = "widget fact-widget";
  el.textContent = facts[Math.floor(Math.random() * facts.length)];

  place(el, x, y, z);
  document.getElementById("canvas").appendChild(el);
}
