const arrow = document.querySelector(".arrow");
const latitude = document.querySelector(".latitude");
const longitude = document.querySelector(".longitude");
const speed = document.querySelector(".speed-value");

navigator.geolocation.watchPosition(
  (data) => {
    console.log(data);
    const mySpeed = data.coords.speed;
    speed.textContent = mySpeed;
    if (mySpeed === null) speed.textContent = "0";
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
    latitude.textContent = `Latitude : ${data.coords.latitude}`
    longitude.textContent =`Longitude : ${data.coords.longitude}`
  },
  (err) => {
    console.error(err);
  }
);
