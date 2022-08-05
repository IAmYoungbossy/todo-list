import { currentProjectArray } from "./add-new-project";
import { displayAddedTasks } from "./display-todo-list";
import { newTaskInput } from "./new-task-input";

function addAndCancelTask(e) {
  const taskList = document.querySelector(".task-list");
  const inputTaskForm = document.querySelector(".task-input-form");
  if (e.target.className == "add-task-button") {
    for (let i = 0; i < taskList.childNodes.length; i++) {
      if (taskList.childNodes[i].classList[0] == "task-input-form") return;
    }
    newTaskInput();
  }
  if (e.target.className == "cancel-task") {
    inputTaskForm.parentNode.removeChild(inputTaskForm);
  }
  if (e.target.className == "add-task") {
    if (document.querySelector(".title-input-form").value.trim() === "") return;
    if (document.querySelector(".date-input-form").value.trim() === "") return;
    displayAddedTasks();
    displayTasks();
    inputTaskForm.parentNode.removeChild(inputTaskForm);
  }
}

export { addAndCancelTask };

function displayTasks() {
  currentProjectArray.forEach((task) => {
    console.log(task.title, task.desc, task.date);
  });
}
