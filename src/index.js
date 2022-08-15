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
import { allTasksEvent } from "./task-grouping";
import { DisplayAllTasksOnPageLoad } from "./display-available-tasks";
import { setTheme } from "./toggle-theme";

createHeader();
createHeaderContent();
CreateMain();
createNavContent();
createfooter();
createTaskDisplaySection();
toggleNavList;
allTasksEvent();
DisplayAllTasksOnPageLoad();

document.addEventListener("mouseup", editCurentProject);
document.addEventListener("mousedown", removeDeleteAndEditPopUp);
document.addEventListener("click", addAndCancelTask);
document.addEventListener("mousedown", addNewProject);
document.addEventListener("mouseup", editCurentTask);
document.querySelector(".themeToggler").addEventListener("click", setTheme);