function editPriority (set){
let lists=[...document.querySelectorAll('.lists')];
let edit =[...document.querySelectorAll(".edit")];

 edit.forEach((button) => {

   button.addEventListener("click", (e)=>{
    if(set.priority==="#FF3636"){
      
     lists[edit.indexOf(button)].style.backgroundColor='#282A7A';
     set.priority='#282A7A';
    }
    else if(set.priority==='#282A7A'){
      lists[edit.indexOf(button)].style.backgroundColor='#1C7A22';
      set.priority='#1C7A22';

    }
    else if(set.priority==="#1C7A22"){
      lists[edit.indexOf(button)].style.backgroundColor='#FF3636';
      set.priority='#FF3636';
    }
})})
}
export {editPriority};