import { displayAddedTasks } from "./display-todo-list";
import { projectArray } from "./project-constructor";

function allTasksEvent() {
  const allTasks = document.querySelector(".home").childNodes[2].firstChild;
  const importantTasks =
    document.querySelector(".home").childNodes[2].lastChild;
  allTasks.addEventListener("click", displayAllTasks);
  importantTasks.addEventListener("click", displayAllImportantTasks);
}

function displayAllTasks() {
  clearTask();
  displayAll();
}

function displayAllImportantTasks() {
  clearTask();
  displayImportantTasks();
}

function clearTask() {
  const addTaskSection = document.querySelector(".add-task-section");
  if (!!addTaskSection)
    while (addTaskSection.childNodes.length > 0)
      addTaskSection.removeChild(addTaskSection.firstChild);
}

function displayAll() {
  projectArray.forEach((project) =>
    project.taskArray.forEach((task) =>
      displayAddedTasks(task.title, task.desc, task.date, task)
    )
  );
}

function displayImportantTasks() {
  projectArray.forEach((project) =>
    project.taskArray.forEach((task) => {
      if (task.important)
        displayAddedTasks(task.title, task.desc, task.date, task);
    })
  );
}

export { allTasksEvent, displayAllTasks };