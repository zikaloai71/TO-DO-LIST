import { deleteItem } from "./deleteItem";
import { completeItem } from "./completeItem";
import { setItem, createItem } from "./setItem";
import { dueDate } from "./due-date";
import { editPriority } from "./editPriority";
import { dragAndDrop } from "./draganddrop";

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

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let set = setItem();
  createItem(set);
  dragAndDrop();
  deleteItem();
  completeItem();
  editPriority(set);
});
