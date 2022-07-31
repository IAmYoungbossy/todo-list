import "./style.css";


import List from "./icons/list.png";
import ProjectMenu from "./icons/projectMenu.png";
import ProjectDots from "./icons/dots.png";
import AddTask from "./icons/addTask.png";
import UncheckedStar from "./icons/uncheckedStar.png";
import UndoneTask from "./icons/undoneTask.png";
import CheckedStar from "./icons/checkedStar.png";
import Donetask from "./icons/doneTask.png";
import { createHeader, createHeaderContent } from "./page-header";
import { CreateMain, createNavContent } from "./page-main";
import { createfooter } from "./page-footer";

createHeader();
createHeaderContent();
CreateMain();
createNavContent();
createfooter();

function createTaskDisplaySection() {
  const mainSection = document.querySelector(".mainSection");
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("mainHeader");
  const sectionHeader = document.createElement("h1");
  headerContainer.appendChild(sectionHeader);
  mainSection.appendChild(headerContainer);
  sectionHeader.textContent = "Default";
}
createTaskDisplaySection();

function getProjectInput() {
  const addProject = document.querySelector(".add-project");
  const inputDiv = document.createElement("div");
  const buttonDiv = document.createElement("div");
  const inputLi = document.createElement("li");
  const projectNameInput = document.createElement("input");
  const cancelButton = document.createElement("button");
  const addButton = document.createElement("button");
  const myInputIcon = new Image();

  myInputIcon.src = List;
  inputDiv.append(myInputIcon, projectNameInput);
  buttonDiv.append(cancelButton, addButton);
  inputLi.append(inputDiv, buttonDiv);
  addProject.parentNode.insertBefore(inputLi, addProject);

  cancelButton.textContent = "Cancel";
  addButton.textContent = "Project";
  projectNameInput.setAttribute("type", "text");
  projectNameInput.classList.add("name-input");
  inputDiv.classList.add("input-container");
  buttonDiv.classList.add("button-class");
  inputLi.classList.add("input-Li");
  cancelButton.classList.add("cancel");
  addButton.classList.add("add");
  projectNameInput.setAttribute("placeholder", "Enter project name.");
}

function listenForNewProjectEvents() {
  const addProject = document.querySelector(".add-project");
  addProject.addEventListener("click", createProjectInputForm);

  function createProjectInputForm() {
    const projectList = document.querySelector(".project-list");
    for (let i = 0; i < projectList.childNodes.length; i++) {
      if (projectList.childNodes[i].classList[0] == "input-Li") return;
    }
    getProjectInput();
    const inputForm = document.querySelector(".input-Li");
    const cancelButton = document.querySelector(".cancel");
    const addButton = document.querySelector(".add");
    cancelButton.addEventListener("click", removeInputForm);
    addButton.addEventListener("click", AddProjectNameToList);
    function removeInputForm() {
      projectList.removeChild(inputForm);
    }
    function AddProjectNameToList() {
      const inputField = document.querySelector(".name-input");
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

      function popUpDeleteAndEdit() {
        if (project.childNodes.length > 3) return;
        const deleteOrEditDiv = document.createElement("div");
        deleteOrEditDiv.classList.add("delete-edit-div");
        const editProject = document.createElement("p");
        editProject.classList.add("edit");
        editProject.textContent = "Edit";
        const deleteProject = document.createElement("p");
        deleteProject.textContent = "Delete";
        deleteOrEditDiv.append(editProject, deleteProject);
        project.appendChild(deleteOrEditDiv);

        function deleteProjectFromList() {
          project.parentNode.removeChild(project);
        }
        deleteProject.addEventListener("mousedown", deleteProjectFromList);
      }
      myProjectDots.addEventListener("click", popUpDeleteAndEdit);
    }
  }
}
listenForNewProjectEvents();

const removeDeleteAndEditPopUp = (e) => {
  if (!!document.querySelector(".delete-edit-div")) {
    if (e.target.className == "edit") {
      return;
    } else {
      document
        .querySelector(".delete-edit-div")
        .parentNode.removeChild(document.querySelector(".delete-edit-div"));
    }
  }
};

function editCurentProject() {
  const editButton = document.querySelector(".edit");
  if (!!editButton) {
    const projectList = document.querySelector(".project-list");
    for (let i = 0; i < projectList.childNodes.length; i++) {
      if (projectList.childNodes[i].classList[0] == "input-Li") return;
    }
    const parentCurentProject = editButton.parentNode.parentNode;
    parentCurentProject.classList.add("hidden");
    const children = parentCurentProject.childNodes;
    const childrenArray = Array.from(children);
    let previousProjectName = childrenArray[1].data;
    if (previousProjectName === undefined) {
      const childArray = Array.from(childrenArray[1].childNodes);
      previousProjectName = childArray[0].data;
    }
    getProjectInput();
    const previousProject =
      document.querySelector(".hidden").nextElementSibling;
    const add = document.querySelector(".add");
    const cancel = document.querySelector(".cancel");
    const nameInput = document.querySelector(".name-input");
    nameInput.value = previousProjectName;
    const inputForm = document.querySelector(".input-Li");
    projectList.insertBefore(inputForm, previousProject);

    function updateNewProjectName() {
      const newProjectName = document.createElement("p");
      newProjectName.textContent = nameInput.value;
      parentCurentProject.replaceChild(
        newProjectName,
        parentCurentProject.childNodes[1]
      );
      removeInputForm();
      parentCurentProject.classList.remove("hidden");
    }
    function removeInputForm() {
      inputForm.parentNode.removeChild(inputForm);
      parentCurentProject.classList.remove("hidden");
    }
    cancel.addEventListener("mousedown", removeInputForm);
    add.addEventListener("mousedown", updateNewProjectName);
  }
}
window.addEventListener("mouseup", editCurentProject);
document.addEventListener("mousedown", removeDeleteAndEditPopUp);

function createTasksSectionAndAddTask() {
  const mainSection = document.querySelector(".mainSection");
  const addTaskSection = document.createElement("div");
  const taskList = document.createElement("ul");
  const addTaskButton = document.createElement("li");
  const myAddTask = new Image();

  myAddTask.src = AddTask;
  addTaskButton.append(myAddTask, "Add Task");
  taskList.appendChild(addTaskButton);
  addTaskSection.appendChild(taskList);
  mainSection.appendChild(addTaskSection);

  addTaskSection.classList.add("add-task-section");
  taskList.classList.add("task-list");
  addTaskButton.classList.add("add-task-button");
}
createTasksSectionAndAddTask();

function createTaskInputForm() {
  const addTaskButton = document.querySelector(".add-task-button");
  const taskList = document.querySelector(".task-list");
  const taskInputForm = document.createElement("li");
  const titleDiv = document.createElement("div");
  const titleInputLabel = document.createElement("label");
  const titleInput = document.createElement("input");
  const textareaDiv = document.createElement("div");
  const textAreaDescriptionLabel = document.createElement("label");
  const textAreaDescription = document.createElement("textarea");
  const dateDiv = document.createElement("div");
  const dateInputLabel = document.createElement("label");
  const dateInput = document.createElement("input");
  const buttonDiv = document.createElement("div");
  const addButton = document.createElement("button");
  const cancelButton = document.createElement("button");

  dateInput.setAttribute("type", "date");
  titleInputLabel.textContent = "Title:";
  textAreaDescriptionLabel.textContent = "Details (Optional):";
  dateInputLabel.textContent = "Date:";
  addButton.textContent = "Project";
  cancelButton.textContent = "Cancel";

  titleDiv.append(titleInputLabel, titleInput);
  textareaDiv.append(textAreaDescriptionLabel, textAreaDescription);
  dateDiv.append(dateInputLabel, dateInput);
  buttonDiv.append(cancelButton, addButton);
  taskInputForm.append(titleDiv, textareaDiv, dateDiv, buttonDiv);
  taskList.insertBefore(taskInputForm, addTaskButton);

  titleInput.classList.add("title-input-form");
  textAreaDescription.classList.add("text-area-form");
  dateInput.classList.add("date-input-form");
  taskInputForm.classList.add("task-input-form");
  buttonDiv.classList.add("btn-class");
  cancelButton.classList.add("cancel-task");
  addButton.classList.add("add-task");
}

function addAndCancelTask(e) {
  const taskList = document.querySelector(".task-list");
  const inputTaskForm = document.querySelector(".task-input-form");
  if (e.target.className == "add-task-button") {
    for (let i = 0; i < taskList.childNodes.length; i++) {
      if (taskList.childNodes[i].classList[0] == "task-input-form") return;
    }
    createTaskInputForm();
  }
  if (e.target.className == "cancel-task") {
    inputTaskForm.parentNode.removeChild(inputTaskForm);
  }
  if (e.target.className == "add-task") {
    console.log(e.target.parentNode.parentNode);
    createTask();
    inputTaskForm.parentNode.removeChild(inputTaskForm);
  }
  if (e.target.className == "my-task-dots") {
    console.log("check");
    editCurentProject();
  }
}
document.addEventListener("click", addAndCancelTask);

function createTask() {
  const dateInputForm = document.querySelector(".date-input-form");
  const titleInput = document.querySelector(".title-input-form");
  const textDesc = document.querySelector(".text-area-form");
  const addTaskButton = document.querySelector(".add-task-button");
  const taskList = document.querySelector(".task-list");
  const newTask = document.createElement("li");
  const titleAndDescDiv = document.createElement("div");
  const taskTitle = document.createElement("h2");
  const taskDesc = document.createElement("p");
  const dateSpan = document.createElement("span");
  const dateInput = document.createElement("p");
  const starDiv = document.createElement("div");
  const taskDiv = document.createElement("div");
  const dateAndSpan = document.createElement("div");
  const myTaskDots = new Image();
  const myUncheckedStar = new Image();
  const myUndoneTask = new Image();
  const myCheckedStar = new Image();
  const myDoneTask = new Image();

  taskTitle.textContent = titleInput.value;
  dateInput.textContent = dateInputForm.value;
  taskDesc.textContent = textDesc.value;
  myTaskDots.src = ProjectDots;
  myUncheckedStar.src = UncheckedStar;
  myUndoneTask.src = UndoneTask;
  myCheckedStar.src = CheckedStar;
  myDoneTask.src = Donetask;

  newTask.classList.add("new-task");
  taskTitle.classList.add("task-title");
  titleAndDescDiv.classList.add("title-and-desc-div");
  taskDesc.classList.add("task-desc");
  dateSpan.classList.add("date-span");
  dateInput.classList.add("date-input");
  starDiv.classList.add("star-div");
  taskDiv.classList.add("task-div");
  myUncheckedStar.classList.add("unchecked-star");
  myCheckedStar.classList.add("checked-star");
  myUndoneTask.classList.add("undone-task");
  myDoneTask.classList.add("done-task");
  myTaskDots.classList.add("my-task-dots");
  dateAndSpan.classList.add("date-and-span");

  titleAndDescDiv.append(taskTitle, taskDesc);
  dateSpan.appendChild(dateInput);
  dateAndSpan.append(dateSpan, myTaskDots);
  starDiv.append(myUncheckedStar, myCheckedStar);
  taskDiv.append(myUndoneTask, myDoneTask);
  newTask.append(taskDiv, titleAndDescDiv, starDiv, dateAndSpan);
  taskList.insertBefore(newTask, addTaskButton);
}

function toggleCheck(e) {
  if (e.target.className == "unchecked-star") {
    e.target.parentNode.parentNode.childNodes[2].childNodes[1].classList.toggle(
      "check"
    );
  }
  if (e.target.className == "undone-task") {
    e.target.parentNode.parentNode.childNodes[0].childNodes[1].classList.toggle(
      "check"
    );
    e.target.parentNode.parentNode.childNodes[1].childNodes[1].classList.toggle(
      "line-through"
    );
    e.target.parentNode.parentNode.childNodes[2].childNodes[0].classList.toggle(
      "line-through"
    );
    e.target.parentNode.parentNode.childNodes[1].childNodes[0].classList.toggle(
      "line-through"
    );
  }
}
document.addEventListener("click", toggleCheck);