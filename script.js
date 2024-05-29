let addBtn = document.querySelector("#add");
let inputBox = document.querySelector(".add-tasks input");
let newTasks = document.querySelector(".new-tasks");

inputBox.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    if (!inputBox.value.length == 0) {
      newTasks.innerHTML += `
    <div class="task">
    <h3 class="h3">${inputBox.value}</h3>
    <button class="del">DEL</button>
    </div>
    `;

      let del = document.querySelectorAll(".del");
      for (let i = 0; i <= del.length; i++) {
        del[i].onclick = function () {
          this.parentNode.remove();
        };
      }
    } else {
      alert("Enter some tasks to be done");
    }
  }
});

addBtn.addEventListener("click", () => {
  if (!inputBox.value.length == 0) {
    newTasks.innerHTML += `
    <div class="task">
    <h3 class="h3">${inputBox.value}</h3>
    <button class="del">DEL</button>
    </div>
    `;

    let del = document.querySelectorAll(".del");
    for (let i = 0; i <= del.length; i++) {
      del[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  } else {
    alert("Enter some tasks to be done");
  }
});
