const inputField = document.querySelector(".todo__input");
const todoList = document.querySelector(".todo__list");
const todoItems = document.querySelectorAll(".todo__item");

inputField.addEventListener("keypress", function(event) {
  if (event.key === "Enter" && inputField.value != "") {
    createTodo(inputField.value);
  }
});

function createTodo(text) {
  let newLi = document.createElement("li");
  let deleteButton = document.createElement("span");
  newLi.innerHTML = text;
  newLi.classList.add("todo__item");
  deleteButton.classList.add("done");
  deleteButton.innerHTML = "&#10006";
  newLi.appendChild(deleteButton);
  todoList.insertBefore(newLi, todoList.firstElementChild);
  inputField.value = null;
}

todoList.addEventListener("click", function(event) {
  if (event.target.classList.contains("todo__item"))
    toggleTodo(event.target);
  else if (event.target.classList.contains("done"))
   deleteTodo(event.target);
});

function toggleTodo(target){
  target.classList.toggle("deleteLi");
}

function deleteTodo(target){
  target.parentNode.parentNode.removeChild(target.parentNode);
}
