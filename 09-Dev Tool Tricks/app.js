const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello");

// Interpolated
console.log("Hello I am a %s string", "🎶");

// Styled
console.log(
  "%c I am some great Text",
  "font-size:50px; color:red; background:blue"
);
// warning!
console.warn("OH NOOOO");

// Error :|
console.error("Shit!!!");
// Info
console.info("My life sucks");

// Testing

const p = document.querySelector("p");

console.assert(p.classList.contains("ouch"), "WRONG!!!!");
console.assert(1 === 2, "404");
console.assert(1 === 1, "404");
// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`this is ${dog.name}`);
  console.log(`It is ${dog.age * 7} years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("console");
console.count("console");
console.count("count");
console.count("count");
console.count("count");
console.count("count");
console.count("console");
console.count("count");
console.count("count");
console.count("count");
console.count("console");
console.count("console");
console.count("console");
console.count("console");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });
