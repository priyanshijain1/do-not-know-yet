function createJSONWidget(x, y, z) {
  const data = {
    topic: "WebGL Shaders",
    mood: "curious",
    updated: "just now"
  };

  const el = document.createElement("div");
  el.className = "widget json-widget";

  el.innerHTML = `
{
  "exploring": "${data.topic}",
  "mood": "${data.mood}",
  "updated": "${data.updated}"
}
`;

  place(el, x, y, z);
  document.getElementById("canvas").appendChild(el);
}
