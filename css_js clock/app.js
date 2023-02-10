const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setDate() {
  const date = new Date();
  const sec = date.getSeconds();
  const min = date.getMinutes();
  const hour = date.getHours();

  const secDeg = (sec / 60) * 360 + 90;
  const minDeg = (min / 60) * 360 + 90;
  const hourDeg = (hour / 12) * 360 + 90;

  secHand.style.transform = `rotate(${secDeg}deg)`;
  minHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;
}
setInterval(setDate);
