import { projectArrayIndex } from "./add-new-project";
import { removeTaskFromList } from "./add-or-cancel-task-event";
import { projectArray, setProjectArray } from "./project-constructor";
import { clearTask, displayAllTasks, showGroupTitle } from "./task-grouping";
import { toggleIcon } from "./toggle-theme";

let projectIndex;
let taskIndex;

function popUpDeleteAndEdit(nameOfArray) {
	let listChildren;
	if (this.parentNode.parentNode.className == "new-task") listChildren = 4;
	else if (this.parentNode.parentNode.className == "projects") listChildren = 3;
	if (this.parentNode.parentNode.childNodes.length > listChildren) return;

	const deleteOrEditDiv = document.createElement("div");
	if (this.parentNode.parentNode.classList[0] == "projects")
		deleteOrEditDiv.classList.add("delete-edit-div");
	if (this.parentNode.parentNode.className == "new-task")
		deleteOrEditDiv.classList.add("delete-edit-task");

	const editProject = document.createElement("p");
	if (this.parentNode.parentNode.className == "new-task")
		editProject.classList.add("edit-task");
	else if (this.parentNode.parentNode.classList[0] == "projects")
		editProject.classList.add("edit");

	editProject.textContent = "Edit";
	const deleteProject = document.createElement("p");
	deleteProject.textContent = "Delete";
	deleteOrEditDiv.append(editProject, deleteProject);
	this.parentNode.parentNode.appendChild(deleteOrEditDiv);

	deleteProject.addEventListener(
		"mousedown",
		deleteFromList.bind(deleteProject)
	);
	getIndex.call(this, nameOfArray);
}

function deleteFromList() {
	if (this.parentNode.parentNode.classList[0] === "projects") {
		// Action when project is deleted
		this.parentNode.parentNode.parentNode.removeChild(
			this.parentNode.parentNode
		);
		projectArray.splice(projectArrayIndex, 1);
		setProjectArray();
		if (document.querySelector(".task-list")) {
			if (
				this.parentNode.parentNode.childNodes[1].textContent ===
        document.querySelector(".mainHeader").children[0].textContent
			) {
				/** If the project being deleted is the current selected project
         * take following action.
         */
				clearTask();
				showGroupTitle("Deleted");

				/**
         * Set time out function to remove the Deleted header and return back
         * to all tasks after 1000ms
         */
				setTimeout(()=>{
					displayAllTasks();
					document.querySelector("li").classList.add("selected");
					toggleIcon();
				}, 1000);
			}
		} else {
			/** This action updates the task grouping section if project is being
       * deleted without first being selected.
       */
			removeTaskFromList();
			displayAllTasks();
		}
	} else {
		// Action when task is deleted
		this.parentNode.parentNode.parentNode.removeChild(
			this.parentNode.parentNode
		);
		projectArray[projectArrayIndex].taskArray.splice(taskIndex, 1);
		setProjectArray();
	}
}

function getIndex(nameOfArray) {
	if (this.parentNode.parentNode.className === "projects")
		getProjectIndex(nameOfArray);
	if (this.parentNode.parentNode.className === "new-task")
		getTaskIndex(nameOfArray);
}

function getProjectIndex(nameOfArray) {
	projectArray.forEach((project) => {
		project.taskArray.forEach((task) => {
			if (task === nameOfArray) projectIndex = projectArray.indexOf(project);
		});
	});
}

function getTaskIndex(nameOfArray) {
	getProjectIndex(nameOfArray);
	taskIndex = projectArray[projectIndex].taskArray.indexOf(nameOfArray);
}

export { popUpDeleteAndEdit, projectIndex, taskIndex, getProjectIndex };