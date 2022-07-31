import "./style.css";
import { createHeader, createHeaderContent } from "./page-header";
import {
  CreateMain,
  createNavContent,
  createTaskDisplaySection,
} from "./page-main";
import { createfooter } from "./page-footer";
import { listenForNewProjectEvents } from "./new-project-events";
import { editCurentProject } from "./edit-current-project";
import { removeDeleteAndEditPopUp } from "./remove-project-popup";
import { todoAddButton } from "./add-todo-button";
import { addAndCancelTask } from "./add-or-cancel-task-event";
import { toggleReadOrImportance } from "./toggle-states";

createHeader();
createHeaderContent();
CreateMain();
createNavContent();
createfooter();
createTaskDisplaySection();
todoAddButton();

document.addEventListener("mouseup", editCurentProject);
document.addEventListener("mousedown", removeDeleteAndEditPopUp);
document.addEventListener("click", addAndCancelTask);
document.addEventListener("click", toggleReadOrImportance);
document.addEventListener("mousedown", listenForNewProjectEvents);