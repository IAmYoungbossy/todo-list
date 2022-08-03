import ProjectMenu from "./icons/projectMenu.png";
import ProjectDots from "./icons/dots.png";
import { getProjectInput } from "./project-input";
import { popUpDeleteAndEdit } from "./delete-edit-pop-up";

function addNewProject() {
  document
    .querySelector(".add-project")
    .addEventListener("click", checkIfAnyFormExist);
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
  document.querySelector(".cancel").addEventListener("click", removeInputForm);
}

function removeInputForm() {
  document
    .querySelector(".project-list")
    .removeChild(document.querySelector(".input-Li"));
}

function addProjectToList() {
  document
    .querySelector(".add")
    .addEventListener("click", AddProjectNameToList);
}

function AddProjectNameToList() {
  const addProject = document.querySelector(".add-project");
  const projectList = document.querySelector(".project-list");
  const inputField = document.querySelector(".name-input");
  const inputForm = document.querySelector(".input-Li");
  const myProjectDotsDiv = document.createElement("div");

  if (inputField.value.trim() === "") return;
  const project = document.createElement("li");
  const myProjectMenu = new Image();
  myProjectMenu.src = ProjectMenu;
  const myProjectDots = new Image();
  myProjectDots.src = ProjectDots;
  project.setAttribute("class", "projects");
  project.append(myProjectMenu, inputField.value);
  myProjectDotsDiv.appendChild(myProjectDots);
  project.appendChild(myProjectDotsDiv);
  addProject.parentNode.insertBefore(project, inputForm);
  projectList.removeChild(inputForm);
  myProjectDots.addEventListener("click", popUpDeleteAndEdit);
}

export { addNewProject };