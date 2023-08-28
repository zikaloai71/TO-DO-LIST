import { deleteItem } from "./deleteItem.js";
import { completeItem } from "./completeItem.js";
import { setItem, createItem } from "./setItem.js";
import { dueDate } from "./due-date.js";
import { editPriority } from "./editPriority.js";
import { dragAndDrop } from "./draganddrop.js";

const submit = document.getElementById("submit");
const addToDo = document.getElementById("todo");
const toDoForm = document.getElementById("todo-form");

dueDate();

addToDo.addEventListener("click", () => {
  if (toDoForm.classList.contains("display-none") == true) {
    toDoForm.classList.remove("display-none");
  } else {
    toDoForm.classList.add("display-none");
  }
});

let toDos = JSON.parse(localStorage.getItem("toDos"));
if(toDos){
  for(let i = 0; i < toDos.length; i++){
    createItem(toDos[i]);
    dragAndDrop();
    deleteItem(toDos[i].id);
    completeItem();
    editPriority(toDos[i], toDos[i].id);
  }
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let set = setItem();
  if(set){
    createItem(set);
    dragAndDrop();
    deleteItem(set.id);
    completeItem();
    editPriority(set , set.id);
  }
});



