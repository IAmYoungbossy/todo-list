import { currentProjectArray } from "./add-new-project";
import { popUpDeleteAndEdit } from "./delete-edit-pop-up";

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

function toggleEvents(
  task,
  myTaskDots,
  myUndoneTask,
  myUncheckedStar,
  myCheckedStar
) {
  myTaskDots.addEventListener(
    "click",
    popUpDeleteAndEdit.bind(myTaskDots, task)
  );

  myUndoneTask.addEventListener(
    "click",
    toggleCompleted.bind(myUndoneTask, task)
  );

  myUncheckedStar.addEventListener(
    "click",
    toggleStar.bind(myCheckedStar, task)
  );
}

function toggleCompleted(task, e) {
  currentProjectArray[currentProjectArray.indexOf(task)].toggleComplete();
  currentProjectArray[currentProjectArray.indexOf(task)].completed
    ? toggleLineThrough(e)
    : toggleLineThrough(e);
}

function toggleStar(task, e) {
  currentProjectArray[currentProjectArray.indexOf(task)].toggleImportance();
  currentProjectArray[currentProjectArray.indexOf(task)].important
    ? toggle(e)
    : toggle(e);
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