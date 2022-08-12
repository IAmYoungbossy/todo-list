import ProjectMenu from "./icons/projectMenu.png";
import ProjectDots from "./icons/dots.png";
import { getProjectInput } from "./project-input";
import { popUpDeleteAndEdit } from "./delete-edit-pop-up";
import { Project, projectArray, setProjectArray } from "./project-constructor";
import { todoAddButton } from "./add-todo-button";
import { displayTasks } from "./add-or-cancel-task-event";
import { toggleIcon } from "./toggle-theme";

let projectArrayIndex;

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
  projectArray.forEach((project) => AddProjectNameToList(project));
}

function AddProjectNameToList(proj) {
  const addProject = document.querySelector(".add-project");
  const myProjectDotsDiv = document.createElement("div");
  const project = document.createElement("li");
  const projectName = document.createElement("p");
  const myProjectMenu = new Image();
  const myProjectDots = new Image();

  myProjectMenu.src = ProjectMenu;
  myProjectDots.src = ProjectDots;
  projectName.textContent = proj.name;
  project.setAttribute("class", "projects");
  projectName.setAttribute("class", "title");
  project.append(myProjectMenu, projectName);
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
  getTaskArray(proj);
  if (e.target.className === "projects") {
    removeTasks();
    todoAddButton();
    displayTasks(e);
    setHeaderToProjectName(proj);
    toggleIcon();
  }
}

function setHeaderToProjectName(proj) {
  document.querySelector(".mainHeader").firstChild.textContent = proj.name;
}

function getTaskArray(proj) {
  projectArrayIndex = projectArray.indexOf(proj);
}

function removeTasks() {
  const addTaskSection = document.querySelector(".add-task-section");
  if (!!addTaskSection)
    while (addTaskSection.firstChild)
      addTaskSection.removeChild(addTaskSection.lastChild);
}

export {
  addNewProject,
  removeTasks,
  createProject,
  removeProjectLists,
  projectArrayIndex,
};