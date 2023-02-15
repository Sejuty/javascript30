window.addEventListener("keydown", (e) => {
  const sound = document.querySelector(`audio[data-key='${e.keyCode}']`); //selecting sound according to keyCode
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  if (!sound) return;
  sound.currentTime = 0;
  sound.play();
  key.classList.add("playing");
});

function keyTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing")
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", keyTransition));
