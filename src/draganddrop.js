// import { deleteItem } from "./deleteItem";
// import { completeItem } from "./completeItem";
// import { setItem } from "./setItem";
// import { editPriority } from "./editPriority";

// let holder;
// function eventListeners() {
//   let set = setItem();
//   deleteItem();
//   completeItem();
//   editPriority(set);
// }

// function handleDragStart(e) {

//   this.style.opacity = "0.4";
//   holder = this;
//   e.dataTransfer.setData("text/html", this.innerHTML);
// }

// // function handleDragOver(e) {
// //   e.preventDefault();
// // }

// function handleDrop(e) {
//   if (holder != this) {
//     holder.innerHTML = this.innerHTML;
//     this.innerHTML = e.dataTransfer.getData("text/html");
//     eventListeners();
//   }
//   eventListeners();
// }

// function handleDragEnd(e) {
//   this.style.opacity = "1";
// }

function dragAndDrop() {
  let lists = [...document.querySelectorAll(".lists")];
  lists.forEach((list) => {
    list.addEventListener("dragstart", ()=>{
      list.classList.add('dragging');
    });
    // list.addEventListener("dragover", handleDragOver);
    // list.addEventListener("drop", handleDrop);
    list.addEventListener("dragend", ()=>{
      list.classList.remove('dragging');
    });
  });
  let container = document.querySelector('.container');
  container.addEventListener('dragover',e=>{
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY)
    const draggable = document.querySelector('.dragging')
    if (afterElement == null) {
      container.appendChild(draggable)
    } else {
      container.insertBefore(draggable, afterElement)
    }
  })
}

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.lists:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}

export { dragAndDrop };
