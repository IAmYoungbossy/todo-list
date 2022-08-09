import { projectArrayIndex } from "./add-new-project";
import { projectArray, setProjectArray } from "./project-constructor";

let projectIndex;
let taskIndex;

function popUpDeleteAndEdit(nameOfArray) {
  let listChildren;
  if (this.parentNode.parentNode.className == "new-task") listChildren = 4;
  else if (this.parentNode.parentNode.className == "projects") listChildren = 3;
  if (this.parentNode.parentNode.childNodes.length > listChildren) return;

  const deleteOrEditDiv = document.createElement("div");
  if (this.parentNode.parentNode.className == "projects")
    deleteOrEditDiv.classList.add("delete-edit-div");
  if (this.parentNode.parentNode.className == "new-task")
    deleteOrEditDiv.classList.add("delete-edit-task");

  const editProject = document.createElement("p");
  if (this.parentNode.parentNode.className == "new-task")
    editProject.classList.add("edit-task");
  else if (this.parentNode.parentNode.className == "projects")
    editProject.classList.add("edit");

  editProject.textContent = "Edit";
  const deleteProject = document.createElement("p");
  deleteProject.textContent = "Delete";
  deleteOrEditDiv.append(editProject, deleteProject);
  this.parentNode.parentNode.appendChild(deleteOrEditDiv);

  deleteProject.addEventListener(
    "mousedown",
    deleteProjectFromList.bind(deleteProject, nameOfArray)
  );
  getIndex.call(this, nameOfArray);
}

function deleteProjectFromList(nameOfArray) {
  this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
  projectArray[projectArrayIndex].taskArray.splice(
    projectArray[projectArrayIndex].taskArray.indexOf(nameOfArray),
    1
  );
  setProjectArray();
}

function getIndex(nameOfArray) {
  if (this.parentNode.parentNode.className === "projects")
    getProjectIndex(nameOfArray);
  if (this.parentNode.parentNode.className === "new-task")
    getTaskIndex(nameOfArray);
}

function getProjectIndex(nameOfArray) {
  projectIndex = projectArray.indexOf(nameOfArray);
}

function getTaskIndex(nameOfArray) {
  taskIndex = projectArray[projectArrayIndex].taskArray.indexOf(nameOfArray);
}

export { popUpDeleteAndEdit, projectIndex, taskIndex };