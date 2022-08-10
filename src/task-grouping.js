import { displayAddedTasks } from "./display-todo-list";
import { projectArray } from "./project-constructor";

if (localStorage.getItem("allTasksArray") == null)
  localStorage.setItem("allTasksArray", JSON.stringify([]));

let allTasksArray = JSON.parse(localStorage.getItem("allTasksArray"));

function setAllTasksArray() {
  localStorage.setItem("allTasksArray", JSON.stringify(allTasksArray));
}

function allTasksEvent() {
  const allTasks = document.querySelector(".home").childNodes[2].firstChild;
  const importantTasks =
    document.querySelector(".home").childNodes[2].lastChild;
  allTasks.addEventListener("click", displayAllTasks);
  importantTasks.addEventListener("click", displayAllImportantTasks);
}

function displayAllTasks(e) {
  clearTask();
  displayAll(e);
}

function displayAllImportantTasks(e) {
  clearTask();
  displayImportantTasks(e);
}

function clearTask() {
  const addTaskSection = document.querySelector(".add-task-section");
  if (!!addTaskSection)
    while (addTaskSection.childNodes.length > 0)
      addTaskSection.removeChild(addTaskSection.firstChild);
}

function displayAll(e) {
  allTasksArray = [];
  setAllTasksArray();
  pushToAllTAsksArray(allTasksArray);
  allTasksArray.forEach((task) => {
    displayAddedTasks(task.title, task.desc, task.date, task, e);
  });
}

function displayImportantTasks(e) {
  allTasksArray = [];
  setAllTasksArray();
  pushToAllTAsksArray(allTasksArray);
  allTasksArray.forEach((task) => {
    if (task.important)
      displayAddedTasks(task.title, task.desc, task.date, task, e);
  });
}

function pushToAllTAsksArray(allTasksArray) {
  projectArray.forEach((project) =>
    project.taskArray.forEach((task) => {
      allTasksArray.push(task);
      localStorage.setItem("allTasksArray", JSON.stringify(allTasksArray));
    })
  );
}

export { allTasksEvent, displayAllTasks };