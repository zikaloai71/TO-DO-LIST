import { toDos } from "./setItem";

function editPriority(set,id) {
  let lists = [...document.querySelectorAll(".lists")];
  let edit = [...document.querySelectorAll(".edit")];

  edit.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (set.priority === "#FF3636") {
        lists[edit.indexOf(button)].style.backgroundColor = "#282A7A";
        let index = toDos.findIndex((toDo) => toDo.id == id);
        toDos[index].priority = "#282A7A";
        localStorage.setItem("toDos", JSON.stringify(toDos));

        set.priority = "#282A7A";
      } else if (set.priority === "#282A7A") {
        lists[edit.indexOf(button)].style.backgroundColor = "#1C7A22";
        let index = toDos.findIndex((toDo) => toDo.id == id);
        toDos[index].priority = "#1C7A22";
        localStorage.setItem("toDos", JSON.stringify(toDos));
        set.priority = "#1C7A22";
      } else if (set.priority === "#1C7A22") {
        lists[edit.indexOf(button)].style.backgroundColor = "#FF3636";
        let index = toDos.findIndex((toDo) => toDo.id == id);
        toDos[index].priority = "#FF3636";
        localStorage.setItem("toDos", JSON.stringify(toDos));
        set.priority = "#FF3636";
      }
   
    });
  });
}
export { editPriority };
