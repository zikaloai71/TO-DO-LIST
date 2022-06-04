import { deleteItem } from "./deleteItem";
import { completeItem } from "./completeItem";
import { setItem } from "./setItem";
import { editPriority } from "./editPriority";

let holder;
function eventListeners() {
  let set = setItem();
  deleteItem();
  completeItem();
  editPriority(set);
}

function handleDragStart(e) {
  this.style.opacity = "0.4";
  holder = this;
  e.dataTransfer.setData("text/html", this.innerHTML);
}

function handleDragOver(e) {
  e.preventDefault();
}

function handleDrop(e) {
  if (holder != this) {
    holder.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData("text/html");
    eventListeners();
  }
  eventListeners();
}

function handleDragEnd(e) {
  this.style.opacity = "1";
}

function dragAndDrop() {
  let lists = [...document.querySelectorAll(".drag")];
  lists.forEach((list) => {
    list.addEventListener("dragstart", handleDragStart);
    list.addEventListener("dragover", handleDragOver);
    list.addEventListener("drop", handleDrop);
    list.addEventListener("dragend", handleDragEnd);
  });
}
export { dragAndDrop };
