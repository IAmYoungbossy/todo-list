import "./style.css";
import { createHeader, createHeaderContent } from "./page-header";
import {
  CreateMain,
  createNavContent,
  createTaskDisplaySection,
} from "./page-main";
import { createfooter } from "./page-footer";
import {
  addNewProject,
  createProject,
  removeProjectLists,
} from "./add-new-project";
import { editCurentProject } from "./edit-current-project";
import { removeDeleteAndEditPopUp } from "./remove-project-popup";
import { addAndCancelTask } from "./add-or-cancel-task-event";
import { toggleNavList } from "./toggle-nav-list";
import { editCurentTask } from "./edit-current-task";
import { allTasksEvent, displayAllTasks } from "./task-grouping";
import { projectArray } from "./project-constructor";

createHeader();
createHeaderContent();
CreateMain();
createNavContent();
createfooter();
createTaskDisplaySection();
toggleNavList;
allTasksEvent();

document.addEventListener("mouseup", editCurentProject);
document.addEventListener("mousedown", removeDeleteAndEditPopUp);
document.addEventListener("click", addAndCancelTask);
document.addEventListener("mousedown", addNewProject);
document.addEventListener("mouseup", editCurentTask);

// Display all projects available
((e) => {
  if (localStorage.getItem("projectArray") == null)
    localStorage.setItem("projectArray", JSON.stringify([]));
  else {
    projectArray.forEach(() => {
      removeProjectLists();
      createProject();
    });
    displayAllTasks(e)
  }
})();