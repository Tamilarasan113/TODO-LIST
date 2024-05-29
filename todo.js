let input = document.getElementById("task-input");
let addBtn = document.getElementById("addBtn");
let todoContainer = document.querySelector(".todo-container");

addBtn.addEventListener("click", () => {
  let inpVal = input.value;

  let todoList = document.createElement("div");
  let para = document.createElement("p");
  let span = document.createElement("span");

  para.innerHTML = inpVal;
  span.innerHTML = "❌";

  todoContainer.classList.add("active");
  todoContainer.appendChild(todoList);
  todoList.classList.add("todo-list");
  todoList.appendChild(para);
  todoList.appendChild(span);

  input.value = "";

  para.addEventListener("click", () => {
    para.style.textDecoration = "line-through";
  });

  span.addEventListener("click", (e) => {
    let parentTodo = e.target.parentNode;
    parentTodo.remove();

    if (todoContainer.childNodes["length"] == 0) {
      // todo-container la child elements illa na antha box ayum remove pannanum
      todoContainer.classList.remove("active");
    }
  });
});
