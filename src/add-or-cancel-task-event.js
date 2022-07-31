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
    displayAddedTasks();
    inputTaskForm.parentNode.removeChild(inputTaskForm);
  }
}

export { addAndCancelTask };
