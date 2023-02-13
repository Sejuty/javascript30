const checkBoxes = document.querySelectorAll("input[type='checkbox']");
// console.log(checkBox)
let lastChecked;

function handleClick(e) {
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // console.log(this, lastChecked)
    checkBoxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log("Starting to check them in between!");
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
  //  *
}

checkBoxes.forEach((checkBox) =>
  checkBox.addEventListener("click", handleClick)
);
