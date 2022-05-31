function dueDate(){
    let today= new Date().toISOString().slice(0, 10);
    let dueDate= document.getElementById('due-date');
    dueDate.min=today;
    return dueDate.value;
    }
    export {dueDate};