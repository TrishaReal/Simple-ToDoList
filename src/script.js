let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("list-container");
let inputField = document.getElementById("inputField");

function addToList() {
  var paragraph = document.createElement("li");
  paragraph.classList.add("paragraphList");
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  paragraph.style.textDecoration = "dot";
  inputField.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
}

addToDoButton.addEventListener("click", function () {
  addToList();
});

function myFunction(event) {
  var send = event.keyCode;
  if (send == 13) {
    // 13 is the ENTER key
    addToList();
  }
}
