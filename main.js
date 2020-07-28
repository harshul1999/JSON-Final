var array = [];
///function to add item
const getTodos = async () => {
  try {
    const res = await axios.get(`http://jsonplaceholder.typicode.com/todos`);
    const todos = res.data;
    return todos;
  } catch (e) {
    console.error(e);
  }
};

// Button to add the item in list
let addbutton = document.getElementById("Add");

// Ul
let ul = document.getElementById("do");

// Checkbox

addbutton.onclick = (e) => {

  var item = document.getElementById("myInput").value;
  var list = document.createElement("li");
  ul.appendChild(list);
  list.innerHTML = item;

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.style = "margin-left:20px";
  // var list = this.parentElement;
  list.appendChild(checkbox);
  checkbox.onclick = checkedItem;

  var deleteBtn = document.createElement("button");
  deleteBtn.type = "Button";
  deleteBtn.id = "delBtn";
  deleteBtn.style.height = "30px";
  deleteBtn.style.width = "100px";
  deleteBtn.innerHTML = "Delete";
  deleteBtn.style = "margin-left:20px";
  list.appendChild(deleteBtn);
  deleteBtn.onclick = deleteIt;
}

function checkedItem(e) {
  document.getElementById("ding").play();
  var checkBox = document.getElementById("checkbox");

  var list = e.target.closest("li");
  list.style.textDecoration = "line-through";
  ul.appendChild(list);

  if (checkbox.checked == false) {
    list.style.textDecoration = "none";
  }
}

function deleteIt(e) {
  let deleteItem = e.target.closest("li");
  deleteItem.remove();
}


let locationBtn = document.getElementById("map");
let p = document.getElementById("mapStatus");
let linkMap = document.getElementById("linkMap");
let img = document.createElement("img");
let div = document.getElementById("localMap");
linkMap.href = "";
linkMap.textContent = "";

locationBtn.onclick = showMap;

function showMap() {
  if (!navigator.geolocation) {
    p.textContent = "Sorry I can't find you";
    displayImage();
  } else {
    p.textContent = "We are on our way to help you!";
    navigator.geolocation.getCurrentPosition(map, error);
  }
}
// const long;
function map(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  p.textContent = "";
  linkMap.textContent = "Check out the map!";
  linkMap.href = `https://www.openstreetmap.org/#map=18/${lat}/${long}`;
  linkMap.textContent = "See What's Around!!!";
  linkMap.style.color = "White";
}

function error() {
  p.textContent = "Sorry, we can't find you.";
  displayImage();
}

function displayImage() {
  var img = document.createElement("img");
  img.setAttribute("src", "img.jpg");
  img.setAttribute("width", "300");
  img.setAttribute("height", "220");
  img.setAttribute("alt", "Sorry!!");
  div.appendChild(img);
}
