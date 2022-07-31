import "./style.css";
import Menu from "./icons/menuIcon.png";
import ToDoLogo from "./icons/to-do.png";
import Theme from "./icons/theme.png";
import AllTasks from "./icons/planning.png";
import Today from "./icons/calendar.png";
import ThisWeek from "./icons/next-week.png";
import Important from "./icons/checklist.png";
import Home from "./icons/home.png";
import Project from "./icons/project.png";
import AddProject from "./icons/add.png";
import List from "./icons/list.png";
import ProjectMenu from "./icons/projectMenu.png";
import ProjectDots from "./icons/dots.png";
import AddTask from "./icons/addTask.png";
import UncheckedStar from "./icons/uncheckedStar.png";
import UndoneTask from "./icons/undoneTask.png";
import CheckedStar from "./icons/checkedStar.png";
import Donetask from "./icons/doneTask.png";

function createHeader() {
  const body = document.querySelector("body");
  const header = document.createElement("header");
  const menuIcon = document.createElement("div");
  const toDoLogo = document.createElement("div");
  const themeToggler = document.createElement("div");
  menuIcon.classList.add("menuIcon");
  toDoLogo.classList.add("toDoLogo");
  themeToggler.classList.add("themeToggler");
  header.appendChild(menuIcon);
  header.appendChild(toDoLogo);
  header.appendChild(themeToggler);
  body.appendChild(header);
}
createHeader();

function createHeaderContent() {
  const menuIcon = document.querySelector(".menuIcon");
  const toDoLogo = document.querySelector(".toDoLogo");
  const themeToggler = document.querySelector(".themeToggler");
  const myMenuIcon = new Image();
  myMenuIcon.src = Menu;
  menuIcon.appendChild(myMenuIcon);
  const myToDoLogo = new Image();
  myToDoLogo.src = ToDoLogo;
  toDoLogo.appendChild(myToDoLogo);
  const myThemeToggler = new Image();
  myThemeToggler.src = Theme;
  themeToggler.appendChild(myThemeToggler);
}
createHeaderContent();

function CreateMain() {
  const body = document.querySelector("body");
  const mainBodyContainer = document.createElement("main");
  const nav = document.createElement("nav");
  nav.classList.add("nav");
  const mainSection = document.createElement("section");
  mainSection.classList.add("mainSection");
  mainBodyContainer.appendChild(nav);
  mainBodyContainer.appendChild(mainSection);
  body.appendChild(mainBodyContainer);
}
CreateMain();

function createNavContent() {
  const nav = document.querySelector(".nav");
  const home = document.createElement("div");
  home.classList.add("home");
  const project = document.createElement("div");
  project.classList.add("project");
  const horizontalRule = document.createElement("hr");
  nav.appendChild(home);
  nav.appendChild(project);

  //Task durations and Importance
  const navHeader = document.createElement("h2");
  const unorderedList = document.createElement("ul");
  const allTasks = document.createElement("li");
  const today = document.createElement("li");
  const thisWeek = document.createElement("li");
  const important = document.createElement("li");

  //Task icons
  const myAllTasks = new Image();
  myAllTasks.src = AllTasks;
  allTasks.appendChild(myAllTasks);
  const myToday = new Image();
  myToday.src = Today;
  today.appendChild(myToday);
  const myThisWeek = new Image();
  myThisWeek.src = ThisWeek;
  thisWeek.appendChild(myThisWeek);
  const myImportant = new Image();
  myImportant.src = Important;
  const myHome = new Image();
  myHome.src = Home;
  navHeader.appendChild(myHome);
  const myProject = new Image();
  myProject.src = Project;

  //Attached to ul
  important.appendChild(myImportant);
  unorderedList.appendChild(allTasks);
  unorderedList.appendChild(today);
  unorderedList.appendChild(thisWeek);
  unorderedList.appendChild(important);
  home.appendChild(navHeader);
  home.appendChild(horizontalRule);
  home.appendChild(unorderedList);

  //Task text content
  navHeader.append("Home");
  allTasks.append("All Tasks");
  today.append("Today");
  thisWeek.append("This Week");
  important.append("Important");

  //Project header
  const projectHeader = document.createElement("h2");
  projectHeader.appendChild(myProject);
  projectHeader.append("Projects");
  project.appendChild(projectHeader);
  const horizontalRule2 = document.createElement("hr");
  project.appendChild(horizontalRule2);
  const projectList = document.createElement("ul");
  const addProject = document.createElement("li");
  addProject.classList.add("add-project");
  projectList.classList.add("project-list");
  projectList.appendChild(addProject);
  const myAdd = new Image();
  myAdd.src = AddProject;
  addProject.appendChild(myAdd);
  addProject.append("Add project");
  project.appendChild(projectList);
}
createNavContent();

function createfooter() {
  const body = document.querySelector("body");
  const footer = document.createElement("footer");
  const anchorLink = document.createElement("a");
  const gitHubIcon = document.createElement("i");
  anchorLink.appendChild(gitHubIcon);
  footer.append("Copyright \u00A9 2022 IAmYoungbossy");
  footer.appendChild(anchorLink);
  body.appendChild(footer);
  anchorLink.setAttribute(
    "href",
    "https:////github.com/IAmYoungbossy/calculator"
  );
  gitHubIcon.classList.add("fa", "fa-github");
  gitHubIcon.style.cssText = "color:black";
}
createfooter();

function createMainSectionContent() {
  const mainSection = document.querySelector(".mainSection");
  const headerContainer = document.createElement("div");
  headerContainer.classList.add("mainHeader");
  const sectionHeader = document.createElement("h1");
  headerContainer.appendChild(sectionHeader);
  mainSection.appendChild(headerContainer);
  sectionHeader.textContent = "Default";
}
createMainSectionContent();

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
    e.target.parentNode.parentNode.childNodes[3].childNodes[1].classList.toggle(
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