const panels = document.querySelectorAll(".panel");

function open() {
  this.classList.toggle("open");
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
panels.forEach((panel) => panel.addEventListener("click", open));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
