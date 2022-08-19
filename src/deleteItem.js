function deleteItem() {
  let lists = [...document.querySelectorAll(".lists")];
  let deleteButtons = [...document.querySelectorAll(".delete")];
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      lists[deleteButtons.indexOf(button)].remove();
    });
  });
}
export { deleteItem };
