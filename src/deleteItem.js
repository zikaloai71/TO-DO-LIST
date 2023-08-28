import { toDos } from "./setItem";
function deleteItem(id) {
  let lists = [...document.querySelectorAll(".lists")];
 
  let deleteButtons = [...document.querySelectorAll(".delete")];

  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      lists[deleteButtons.indexOf(button)].remove();
      let index = toDos.findIndex((toDo) => toDo.id == id);
      toDos.splice(index, 1);
      console.log(toDos);
      if(lists.length === 0){
        localStorage.clear();
      }
      else{
        localStorage.setItem("toDos", JSON.stringify(toDos));
      }
      
    });
  });

}
export { deleteItem };
