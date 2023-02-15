const pressed = [];
const secretCode = "sejuty";

window.addEventListener("keyup", (e) => {
  pressed.push(e.key);
  //array.splice(start, delete)
  // Negative index counts back from the end of the array — if start < 0, start + array.length is used.
  // If start < -array.length or start is omitted, 0 is used.
  // If start >= array.length, no element will be deleted, but the method will behave as an adding function, adding as many elements as provided.
  //If deleteCount is 0 or negative, no elements are removed.
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if(pressed.join('').includes(secretCode)){
    cornify_add();
        alert("DING DING")
  }
  console.log(pressed)
  
});
