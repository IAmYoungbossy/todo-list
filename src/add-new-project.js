import ProjectMenu from "./icons/projectMenu.png";
import ProjectDots from "./icons/dots.png";
import { getProjectInput } from "./project-input";
import { popUpDeleteAndEdit } from "./delete-edit-pop-up";
import { Project, projectArray, setProjectArray } from "./project-constructor";
import { todoAddButton } from "./add-todo-button";
import { displayTasks } from "./add-or-cancel-task-event";

let projectArrayIndex;

if (localStorage.getItem("currentProjectArray") == null)
  localStorage.setItem("currentProjectArray", JSON.stringify([]));

let currentProjectArray = JSON.parse(
  localStorage.getItem("currentProjectArray")
);

function setCurrentProjectArray() {
  localStorage.setItem(
    "currentProjectArray",
    JSON.stringify(currentProjectArray)
  );
}

function addNewProject() {
  document
    .querySelector(".add-project")
    .addEventListener("click", checkIfAnyFormExist);
}

function checkIfAnyFormExist() {
  const projectList = document.querySelector(".project-list");
  for (let i = 0; i < projectList.childNodes.length; i++)
    if (projectList.childNodes[i].classList[0] == "input-Li") return;
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
  document.querySelector(".add").addEventListener("click", displayProjects);
}

function displayProjects() {
  if (document.querySelector(".name-input").value.trim() === "") return;
  pushNewProjectInstance();
  removeProjectLists();
  createProject();
}

function pushNewProjectInstance() {
  projectArray.push(new Project(document.querySelector(".name-input").value));
  setProjectArray();
}

function removeProjectLists() {
  const projectList = document.querySelector(".project-list");
  while (projectList.childNodes.length > 1)
    projectList.removeChild(projectList.firstChild);
}

function createProject() {
  projectArray.forEach((project) =>
    AddProjectNameToList(project)
  );
}

function AddProjectNameToList(proj) {
  const addProject = document.querySelector(".add-project");
  const myProjectDotsDiv = document.createElement("div");
  const project = document.createElement("li");
  const myProjectMenu = new Image();
  const myProjectDots = new Image();
  myProjectMenu.src = ProjectMenu;
  myProjectDots.src = ProjectDots;
  project.setAttribute("class", "projects");
  project.append(myProjectMenu, proj.name);
  myProjectDotsDiv.appendChild(myProjectDots);
  project.appendChild(myProjectDotsDiv);
  addProject.parentNode.insertBefore(project, addProject);

  myProjectDots.addEventListener(
    "click",
    popUpDeleteAndEdit.bind(myProjectDots, proj)
  );
  project.addEventListener("click", setProjectForUse.bind(null, proj));
}

function setProjectForUse(proj, e) {
  if (e.target.className === "projects") {
    getTaskArray(proj);
    removeTasks();
    todoAddButton();
    displayTasks(e);
    setHeaderToProjectName(proj);
  }
}

function setHeaderToProjectName(proj) {
  document.querySelector(".mainHeader").firstChild.textContent =
    proj.name;
}

function getTaskArray(proj) {
  projectArrayIndex = projectArray.indexOf(proj);
  console.log(projectArrayIndex);
}

function removeTasks() {
  const taskList = document.querySelector(".mainSection");
  if (!!taskList)
    while (taskList.childNodes.length > 1)
      taskList.removeChild(taskList.lastChild);
}

export {
  addNewProject,
  currentProjectArray,
  removeTasks,
  setCurrentProjectArray,
  createProject,
  removeProjectLists,
  projectArrayIndex
};