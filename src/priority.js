function priority() {
  let option = [...document.getElementsByTagName("option")];

  for (let i = 0; i < option.length; i++) {
    if (option[i].selected === true) {
      if (option[i].value === "red") {
        return "#FF3636";
      } else if (option[i].value === "blue") {
        return "#282A7A";
      } else if (option[i].value === "green") {
        return "#1C7A22";
      }
    }
  }
}
export { priority };
