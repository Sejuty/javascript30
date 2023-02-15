// const times = document.querySelectorAll("[data-time]");
// const seconds = [];
// const minutes = [];
// times.forEach((time) => {
//   const [min,sec] = time.dataset.time.split(":").map(parseFloat);

//   seconds.push(sec);
//   minutes.push(min);
// });
// const finalSec = (seconds.reduce(totalSec)%60);
// const remainingMin = Math.trunc(seconds.reduce(totalSec)/60)
// const finalMin = (minutes.reduce(totalMin)+remainingMin)%60;
// const remainingHour = Math.trunc((minutes.reduce(totalMin)+remainingMin)/60)
// function totalSec(total, sec) {
//     return total+sec
// }
// function totalMin(total, min) {
//     return total+min
// }

// console.log(`${remainingHour}:${finalMin}:${finalSec}`)
// console.log(seconds)
// console.log(minutes)
// const finalTime = seconds.reduce(totalSec)
// console.log(finalTime)

const times = Array.from(document.querySelectorAll("[data-time]"));

const seconds = times
  .map((time) => time.dataset.time)
  .map((timeCode) => {
    const [min, sec] = timeCode.split(":").map(parseFloat);
    return min * 60 + sec;
  })
  .reduce((total, vidSec) => total + vidSec);
console.log(seconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, mins, secondsLeft);

// const s = times.map((time) => time.dataset.time)
// console.log(s)
// const s2 = s.map(t=>{
//     const [min,sec] = t.split(":").map(parseFloat);
//     return (min*60)+sec
// })
// console.log(s2)
