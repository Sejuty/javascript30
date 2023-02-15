const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];
function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item").value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  plateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  console.table(items, itemsList);
  this.reset();
}

function plateList(plates = [], plateList) {
  plateList.innerHTML = plates
    .map((plate, i) => {
      return `
    
    <li>
    <input type="checkbox" data-index=${i} id="item${i}"
    ${
     plate.done ? "checked" : ""}>
     <label for="id="item${i}">${plate.text} </label>
     
    </li>
    `;
    })
    .join("");
}
function isChecked(e) {
  if (!e.target.matches("input")) return; //skip this unless its an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  console.log(localStorage.getItem("items"));
  plateList(items, itemsList);
  console.log(items);
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", isChecked);
plateList(items, itemsList);
