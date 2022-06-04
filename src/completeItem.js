function completeItem() {
  let lists = [...document.querySelectorAll(".lists")];
  let complete = [...document.querySelectorAll(".complete")];
  complete.forEach((button) => {
    button.addEventListener("click", () => {
      lists[complete.indexOf(button)].innerHTML = `<h2>completed</h2>`;
      lists[complete.indexOf(button)].style.backgroundColor = "green";
      setTimeout(function () {
        lists[complete.indexOf(button)].remove();
      }, 3000);
    });
  });
}
export { completeItem };
