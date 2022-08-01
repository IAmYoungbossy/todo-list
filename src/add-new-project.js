import ProjectMenu from "./icons/projectMenu.png";
import ProjectDots from "./icons/dots.png";
import { getProjectInput } from "./project-input";

function addNewProject() {
  const addProject = document.querySelector(".add-project");
  addProject.addEventListener("click", checkIfAnyFormExist);
}

function checkIfAnyFormExist() {
  const projectList = document.querySelector(".project-list");
  for (let i = 0; i < projectList.childNodes.length; i++) {
    if (projectList.childNodes[i].classList[0] == "input-Li") return;
  }
  getProjectInput();
  cancelProjectInput();
  addProjectToList();
}

function cancelProjectInput() {
  const cancelButton = document.querySelector(".cancel");
  cancelButton.addEventListener("click", removeInputForm);
}

function removeInputForm() {
  const projectList = document.querySelector(".project-list");
  const inputForm = document.querySelector(".input-Li");
  projectList.removeChild(inputForm);
}

function addProjectToList() {
  const addButton = document.querySelector(".add");
  addButton.addEventListener("click", AddProjectNameToList);
}

function AddProjectNameToList() {
  const addProject = document.querySelector(".add-project");
  const projectList = document.querySelector(".project-list");
  const inputField = document.querySelector(".name-input");
  const inputForm = document.querySelector(".input-Li");
  if (inputField.value === "") return;
  const project = document.createElement("li");
  const myProjectMenu = new Image();
  myProjectMenu.src = ProjectMenu;
  const myProjectDots = new Image();
  myProjectDots.src = ProjectDots;
  project.setAttribute("class", "projects");
  project.append(myProjectMenu, inputField.value);
  project.appendChild(myProjectDots);
  addProject.parentNode.insertBefore(project, inputForm);
  projectList.removeChild(inputForm);
  myProjectDots.addEventListener("click", popUpDeleteAndEdit);
}

function popUpDeleteAndEdit() {
  if (this.parentNode.childNodes.length > 3) return;
  const deleteOrEditDiv = document.createElement("div");
  deleteOrEditDiv.classList.add("delete-edit-div");
  const editProject = document.createElement("p");
  editProject.classList.add("edit");
  editProject.textContent = "Edit";
  const deleteProject = document.createElement("p");
  deleteProject.textContent = "Delete";
  deleteOrEditDiv.append(editProject, deleteProject);
  this.parentNode.appendChild(deleteOrEditDiv);
  deleteProject.addEventListener("mousedown", deleteProjectFromList);
}

function deleteProjectFromList() {
  this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
}

export { addNewProject };