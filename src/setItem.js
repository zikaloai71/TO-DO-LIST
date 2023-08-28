import { title } from "./title.js";
import { description } from "./description.js";
import { dueDate } from "./due-date.js";
import { priority } from "./priority.js";

let ul = document.createElement("ul");
ul.classList.add('container');
let body = document.getElementsByTagName("body")[0];
body.appendChild(ul);
const toDos = []

function Todo(title, description, date, priority) {
  this.id = Date.now();
  this.title = title;
  this.description = description;
  this.date = date;
  this.priority = priority;
}
function setItem() {
  let list = new Todo(title(), description(), dueDate(), priority());
  if (title() == "" || description() == "" || dueDate() == "") {
    alert("Please fill all the fields");
    return false;
  }
  return list;
}

function createItem(list) {
  console.log(list.priority)
  let li = document.createElement("li");
  li.setAttribute("draggable", "true");
  ul.appendChild(li);
  li.classList.add("lists");
  li.innerHTML += `<p> <span>title :  ${list.title}</span>
    <span> description :  ${list.description}</span>
     <span>due-date : ${list.date}</span></p>
    <aside>
    <button class="delete"><i class="fa-solid fa-trash"></i></button><button class='edit'><i class="fa-solid fa-pen-to-square"></i></button><button class='complete'><i class="fa-solid fa-check"></i></button></aside> 
    `;
  toDos.push(list);

  li.style.backgroundColor = list.priority;
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

export { setItem, createItem , toDos };
