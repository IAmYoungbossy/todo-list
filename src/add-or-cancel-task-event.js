import { projectArrayIndex } from "./add-new-project";
import { displayAddedTasks } from "./display-todo-list";
import { newTaskInput } from "./new-task-input";
import { projectArray, setProjectArray, TodoTask } from "./project-constructor";
import { toggleIcon } from "./toggle-theme";

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

    pushToTaskArray();
    removeTaskFromList();
    displayTasks();
    toggleIcon();
  }
}

function pushToTaskArray() {
  projectArray[projectArrayIndex].taskArray.push(
    new TodoTask(
      document.querySelector(".title-input-form").value,
      document.querySelector(".text-area-form").value,
      document.querySelector(".date-input-form").value
    )
  );
  setProjectArray();
}

function removeTaskFromList() {
  const taskList = document.querySelector(".task-list");
  if (!!taskList) {
    while (taskList.childNodes.length > 1)
      taskList.removeChild(taskList.firstChild);
  }
}

function displayTasks() {
  projectArray[projectArrayIndex].taskArray.forEach((task) => {
    Object.setPrototypeOf(task, TodoTask.prototype);
    setProjectArray();
    displayAddedTasks(task.title, task.desc, task.date, task);
  });
}

export { addAndCancelTask, displayTasks, removeTaskFromList };