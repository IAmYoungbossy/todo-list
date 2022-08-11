import {
  getProjectIndex,
  popUpDeleteAndEdit,
  projectIndex,
} from "./delete-edit-pop-up";
import { projectArray, setProjectArray, TodoTask } from "./project-constructor";

function addClass(
  task,
  myDoneTask,
  taskTitle,
  taskDesc,
  dateInput,
  myCheckedStar
) {
  if (task.completed) {
    myDoneTask.classList.add("done");
    taskTitle.classList.add("line-through");
    taskDesc.classList.add("line-through");
    dateInput.classList.add("line-through");
  }
  if (task.important) myCheckedStar.classList.add("check");
}

function toggleEvents(task, myTaskDots, myUndoneTask, myUncheckedStar) {
  getProjectIndex(task);
  addMethods();
  myTaskDots.addEventListener(
    "click",
    popUpDeleteAndEdit.bind(myTaskDots, task)
  );
  myUndoneTask.addEventListener("click", toggleCompleted.bind(null, task));
  myUncheckedStar.addEventListener("click", toggleStar.bind(null, task));
}

function addMethods() {
  projectArray[projectIndex].taskArray.forEach((task) => {
    Object.setPrototypeOf(task, TodoTask.prototype);
    setProjectArray();
  });
}

function toggleCompleted(task, e) {
  task.toggleComplete();
  e.target.classList === "undone-task"
    ? toggleLineThrough(e)
    : toggleLineThrough(e);
}

function toggleStar(task, e) {
  task.toggleImportance();
  e.target.classList === "new-task" ? toggle(e) : toggle(e);
}

function toggleLineThrough(e) {
  e.target.parentNode.parentNode.childNodes[0].childNodes[1].classList.toggle(
    "done"
  );
  e.target.parentNode.parentNode.childNodes[1].childNodes[1].classList.toggle(
    "line-through"
  );
  e.target.parentNode.parentNode.childNodes[3].childNodes[0].childNodes[0].classList.toggle(
    "line-through"
  );
  e.target.parentNode.parentNode.childNodes[1].childNodes[0].classList.toggle(
    "line-through"
  );
}

function toggle(e) {
  e.target.parentNode.parentNode.childNodes[2].childNodes[1].classList.toggle(
    "check"
  );
}

export { addClass, toggleEvents };