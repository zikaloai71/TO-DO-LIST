import { title } from "./title";
import { description } from "./description";
import { dueDate } from "./due-date";
import { priority } from "./priority";

let ul = document.createElement("ul");
let body = document.getElementsByTagName("body")[0];
body.appendChild(ul);

function Todo(title, description, date, priority) {
  this.title = title;
  this.description = description;
  this.date = date;
  this.priority = priority;
}
function setItem() {
  let list = new Todo(title(), description(), dueDate(), priority());
  if (title() == "" || description() == "" || dueDate() == "") {
    return;
  }
  return list;
}

function createItem(list) {
  let div = document.createElement("div");
  let li = document.createElement("li");
  ul.appendChild(div);
  div.setAttribute("draggable", "true");
  div.classList.add("drag");
  div.appendChild(li);
  li.classList.add("lists");
  li.innerHTML += `<p> <span>title :  ${list.title}</span>
    <span> description :  ${list.description}</span>
     <span>due-date : ${list.date}</span></p>
    <aside>
    <button class="delete"><i class="fa-solid fa-trash"></i></button><button class='edit'><i class="fa-solid fa-pen-to-square"></i></button><button class='complete'><i class="fa-solid fa-check"></i></button></aside> 
    `;
  li.style.backgroundColor = list.priority;
}

export { setItem, createItem };
