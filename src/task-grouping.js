import isWithinInterval from "date-fns/isWithinInterval";
import { styleSelectedList } from "./add-new-project";
import { displayAddedTasks } from "./display-todo-list";
import { projectArray } from "./project-constructor";
import { toggleIcon } from "./toggle-theme";

function allTasksEvent() {
  const allTasks = document.querySelector(".home").childNodes[2].firstChild;
  const importantTasks =
    document.querySelector(".home").childNodes[2].lastChild;
  const thisWeek = document.querySelector(".home").childNodes[2].children[2];
  const thisDay = document.querySelector(".home").childNodes[2].children[1];

  allTasks.addEventListener("click", displayAllTasksForClick.bind(allTasks));
  thisDay.addEventListener("click", toDay.bind(thisDay));
  thisWeek.addEventListener("click", sevenDays.bind(thisWeek));
  importantTasks.addEventListener(
    "click",
    displayAllImportantTasks.bind(importantTasks)
  );
}

function toDay() {
  clearTask();
  nextNthDays(now, today);
  showGroupTitle("Today");
  toggleIcon();
  styleSelectedList.call(this);
}

function sevenDays() {
  clearTask();
  nextNthDays(now, next7Days);
  showGroupTitle("Next 7 Days");
  toggleIcon();
  styleSelectedList.call(this);
}

function displayAllTasksForClick() {
  clearTask();
  displayAll();
  showGroupTitle("All tasks");
  toggleIcon();
  styleSelectedList.call(this);
}

function displayAllTasks() {
  clearTask();
  displayAll();
  showGroupTitle("All tasks");
  toggleIcon();
}

function displayAllImportantTasks() {
  clearTask();
  displayImportantTasks();
  showGroupTitle("Important tasks");
  toggleIcon();
  styleSelectedList.call(this);
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

function showGroupTitle(groupTitle) {
  document.querySelector(".mainHeader").childNodes[0].textContent = groupTitle;
}

/**
 * Checks If Date Is Within Interval Using Date-fn Package
 */

// Function for adding Nth days to Date prototype
Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

const date = new Date();
const now = formatDate(new Date());
const today = formatDate(date.addDays(1));
const next7Days = formatDate(date.addDays(7));
date.setHours(0, 0, 0, 0);

// Format a date to YYYY,MM,DD
function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function formatDate(date) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join(",");
}

// Checks if date is within interval
function nextNthDays(startDay, endDay) {
  projectArray.forEach((project) =>
    project.taskArray.forEach((task) => {
      if (
        isWithinInterval(new Date(task.date), {
          start: new Date(startDay),
          end: new Date(endDay),
        })
      )
        displayAddedTasks(task.title, task.desc, task.date, task);
    })
  );
}

export { allTasksEvent, displayAllTasks, clearTask, showGroupTitle };