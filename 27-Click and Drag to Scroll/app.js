const slider = document.querySelector(".items");
let isDown = false;

let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;

});
slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    //where the cursor is when we move it
    const x = e.pageX - slider.offsetLeft;
    //how far from the initial point its moving
    const walk = (x - startX) *3;
    //if goes left add to the scrollLeft so it moves from right to left
    slider.scrollLeft = scrollLeft-walk;
});
