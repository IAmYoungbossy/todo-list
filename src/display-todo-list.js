import ProjectDots from "./icons/dots.png";
import UncheckedStar from "./icons/uncheckedStar.png";
import UndoneTask from "./icons/undoneTask.png";
import CheckedStar from "./icons/checkedStar.png";
import Donetask from "./icons/doneTask.png";
import { addClass, toggleEvents } from "./toggle-states";

function displayAddedTasks(title, desc, date, task, e) {
  const addTaskButton = document.querySelector(".add-task-button");
  const taskList = document.querySelector(".task-list");

  const newTask = document.createElement("li");
  const titleAndDescDiv = document.createElement("div");
  const taskTitle = document.createElement("h2");
  const taskDesc = document.createElement("p");
  const dateSpan = document.createElement("span");
  const dateInput = document.createElement("p");
  const starDiv = document.createElement("div");
  const taskDiv = document.createElement("div");
  const dateAndSpan = document.createElement("div");

  const myTaskDots = new Image();
  const myUncheckedStar = new Image();
  const myUndoneTask = new Image();
  const myCheckedStar = new Image();
  const myDoneTask = new Image();

  taskTitle.textContent = title;
  taskDesc.textContent = desc;
  dateInput.textContent = date;

  myTaskDots.src = ProjectDots;
  myUncheckedStar.src = UncheckedStar;
  myUndoneTask.src = UndoneTask;
  myCheckedStar.src = CheckedStar;
  myDoneTask.src = Donetask;

  newTask.classList.add("new-task");
  taskTitle.classList.add("task-title");
  titleAndDescDiv.classList.add("title-and-desc-div");
  taskDesc.classList.add("task-desc");
  dateSpan.classList.add("date-span");
  dateInput.classList.add("date-input");
  starDiv.classList.add("star-div");
  taskDiv.classList.add("task-div");
  myUncheckedStar.classList.add("unchecked-star");
  myCheckedStar.classList.add("checked-star");
  myUndoneTask.classList.add("undone-task");
  myDoneTask.classList.add("done-task");
  myTaskDots.classList.add("my-task-dots");
  dateAndSpan.classList.add("date-and-span");

  titleAndDescDiv.append(taskTitle, taskDesc);
  dateSpan.appendChild(dateInput);
  dateAndSpan.append(dateSpan, myTaskDots);
  starDiv.append(myUncheckedStar, myCheckedStar);
  taskDiv.append(myUndoneTask, myDoneTask);
  newTask.append(taskDiv, titleAndDescDiv, starDiv, dateAndSpan);
  insertTodoList(e, taskList, newTask, addTaskButton);

  toggleEvents(task, myTaskDots, myUndoneTask, myUncheckedStar, myCheckedStar);
  addClass(task, myDoneTask, taskTitle, taskDesc, dateInput, myCheckedStar);
}

function insertTodoList(e, taskList, newTask, addTaskButton) {
  if (
    e.target.classList[0] === "add-task" ||
    e.target.classList[0] === "projects"
  )
    taskList.insertBefore(newTask, addTaskButton);
  else document.querySelector(".add-task-section").appendChild(newTask);
}

export { displayAddedTasks };