import { displayAddedTasks } from "./display-todo-list";
import { projectArray } from "./project-constructor";

let allTasksArray = [];

function allTasksEvent() {
  const allTask = document.querySelector(".home").childNodes[2].firstChild;
  allTask.addEventListener("click", displayAllTasks);
}

function displayAllTasks(e) {
  clearTask();
  displayAll(e);
}

function clearTask() {
  const addTaskSection = document.querySelector(".add-task-section");
  if (!!addTaskSection) {
    while (addTaskSection.childNodes.length > 0)
      addTaskSection.removeChild(addTaskSection.firstChild);
  }
}

function displayAll(e) {
  allTasksArray = [];
  pushToAllTAsksArray(allTasksArray);
  allTasksArray.forEach((task) =>
    displayAddedTasks(task.title, task.desc, task.date, task, e)
  );
}

function pushToAllTAsksArray(allTasksArray) {
  projectArray.forEach((project) =>
    project.taskArray.forEach((task) => allTasksArray.push(task))
  );
}

export { allTasksEvent, allTasksArray };