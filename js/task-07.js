const inputText = document.querySelector("#text");
const inputControl = document.querySelector("#font-size-control");
inputControl.oninput = function () {
  console.log(this.value);
  inputText.style.fontSize = inputControl.value + "px";
};
