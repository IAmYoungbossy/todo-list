import { projectArray } from "./project-constructor";

let projectIndex;

function popUpDeleteAndEdit(NameOfProject) {
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
    deleteProjectFromList.bind(deleteProject, NameOfProject)
  );
  getProjectIndex();
}

function getProjectIndex() {
  projectIndex = projectArray.indexOf(NameOfProject);
}

function deleteProjectFromList(nameOfProject) {
  this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
  projectArray.splice(projectArray.indexOf(nameOfProject), 1);
}

export { popUpDeleteAndEdit, projectIndex };