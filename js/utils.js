function place(el, x, y, z = 1) {
  el.style.left = x + "%";
  el.style.top = y + "%";
  el.style.zIndex = z;
}
