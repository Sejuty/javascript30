const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  //   console.log(width, height);

  let { offsetX: x, offsetY: y } = e;
  //   console.log(x, y);

  //this ==> div.hero
  //e.target ==> h1

  if (this !== e.target) {
    x += e.target.offsetX;
    y += e.target.offsetY;
  }

  //how much the shadow will strech

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / width) * walk - walk / 2);

  console.log(xWalk, yWalk);

  text.style.textShadow = `   ${xWalk}px ${yWalk}px 0 #4b4b517e`;
}

hero.addEventListener("mousemove", shadow);
