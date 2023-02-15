const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
// console.log(skipButtons)
const ranges = player.querySelectorAll(".player__slider");

// let play_pause = true;

// console.log(play);

//add functions
function playVideo() {
  //   if (play_pause) {
  //     video.play();
  //     play_pause = false;
  //   } else {
  //     video.pause();
  //     play_pause = true;
  //   }
  const method = video.paused ? "play" : "pause";
  video[method]();
}

function changeRanges() {
  video[this.name] = this.value;
}
function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
  console.log(icon);
}
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
//add Event Listener

video.addEventListener("click", playVideo);
toggle.addEventListener("click", playVideo);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

ranges.forEach((range) => range.addEventListener("change", changeRanges));
skipButtons.forEach((button) => button.addEventListener("click", skip));
let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
