import "./style.css";
import { createHeader, createHeaderContent } from "./page-header";
import {
  CreateMain,
  createNavContent,
  createTaskDisplaySection,
} from "./page-main";
import { createfooter } from "./page-footer";
import { addNewProject } from "./add-new-project";
import { editCurentProject } from "./edit-current-project";
import { removeDeleteAndEditPopUp } from "./remove-project-popup";
import { addAndCancelTask } from "./add-or-cancel-task-event";
import { toggleNavList } from "./toggle-nav-list";
import { editCurentTask } from "./edit-current-task";
import { allTasksEvent } from "./all-task";

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