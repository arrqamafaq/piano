const todoContainer = document.querySelector(".todoContainer");

//Title
const title = document.createElement("h1");
title.textContent = "ToDo-Ist";
todoContainer.appendChild(title);

//list
const ul = document.createElement("ul");
todoContainer.appendChild(ul);

//add element
const task = document.createElement("div");
task.classList.add("task");
const taskinput = document.createElement("input");
const addTask = document.createElement("button");
addTask.textContent = "Add Task";

todoContainer.appendChild(task);
task.appendChild(taskinput);
task.appendChild(addTask);

//adding tasks using event-Delegation
todoContainer.addEventListener("click", (e) => {
  if (e.target === addTask) {
    const taskText = taskinput.value;
    if (taskText.trim() === "") {
      alert("Task can't be empty");
      return;
    }
    //creating list-item
    const li = document.createElement("li");
    //creating a remove task button for every task
    const removeTask = document.createElement("button");
    li.innerText = taskText;
    removeTask.innerHTML = "Delete";

    ul.appendChild(li);
    removeTask.innerHTML = "Delete";

    li.appendChild(removeTask);
    taskinput.value = "";
  }
  if (e.target.innerHTML === "Delete") {
    const liToDelete = e.target.parentElement;
    ul.removeChild(liToDelete);
  }
});

