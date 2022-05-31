import { deleteItem } from "./deleteItem";
import { completeItem } from "./completeItem";
import { setItem, createItem} from "./setItem";
import { editPriority } from "./editPriority";

const submit = document.getElementById("submit");
const addToDo= document.getElementById('todo');
const toDoForm=document.getElementById("todo-form");
addToDo.addEventListener('click',()=>{
  if(toDoForm.classList.contains('display-none')==true){
    toDoForm.classList.remove('display-none');
  }
else{
  toDoForm.classList.add('display-none');
}
})

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let set = setItem();
  createItem(set);
  deleteItem();
  completeItem();
  editPriority(set);
  })