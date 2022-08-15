import AllTasks from "./icons/planning.png";
import Today from "./icons/calendar.png";
import ThisWeek from "./icons/next-week.png";
import Important from "./icons/checklist.png";
import Home from "./icons/home.png";
import Project from "./icons/project.png";
import AddProject from "./icons/add.png";

function CreateMain() {
	const body = document.querySelector("body");
	const mainBodyContainer = document.createElement("main");
	const nav = document.createElement("nav");
	const mainSection = document.createElement("section");

	nav.classList.add("nav");
	mainSection.classList.add("mainSection");

	mainBodyContainer.appendChild(nav);
	mainBodyContainer.appendChild(mainSection);
	body.appendChild(mainBodyContainer);
}

function createNavContent() {
	const nav = document.querySelector(".nav");
	const home = document.createElement("div");
	const project = document.createElement("div");
	const horizontalRule = document.createElement("hr");

	home.classList.add("home");
	project.classList.add("project");
  
	nav.appendChild(home);
	nav.appendChild(project);

	const navHeader = document.createElement("h2");
	const unorderedList = document.createElement("ul");
	const allTasks = document.createElement("li");
	const today = document.createElement("li");
	const thisWeek = document.createElement("li");
	const important = document.createElement("li");

	const myAllTasks = new Image();
	const myToday = new Image();
	const myThisWeek = new Image();
	const myImportant = new Image();
	const myHome = new Image();
	const myProject = new Image();

	myAllTasks.src = AllTasks;
	myToday.src = Today;
	myThisWeek.src = ThisWeek;
	myImportant.src = Important;
	myHome.src = Home;
	myProject.src = Project;

	allTasks.appendChild(myAllTasks);
	today.appendChild(myToday);
	thisWeek.appendChild(myThisWeek);
	navHeader.appendChild(myHome);
  
	important.appendChild(myImportant);
	unorderedList.appendChild(allTasks);
	unorderedList.appendChild(today);
	unorderedList.appendChild(thisWeek);
	unorderedList.appendChild(important);
	home.appendChild(navHeader);
	home.appendChild(horizontalRule);
	home.appendChild(unorderedList);

	navHeader.append("Home");
	allTasks.append("All Tasks");
	today.append("Today");
	thisWeek.append("This Week");
	important.append("Important");

	const projectHeader = document.createElement("h2");
	const horizontalRule2 = document.createElement("hr");
	const projectList = document.createElement("ul");
	const addProject = document.createElement("li");
	const myAdd = new Image();
	myAdd.src = AddProject;

	projectHeader.appendChild(myProject);
	projectHeader.append("Projects");
	project.appendChild(projectHeader);
	project.appendChild(horizontalRule2);
	projectList.appendChild(addProject);
	addProject.appendChild(myAdd);
	addProject.append("Add project");
	project.appendChild(projectList);

	addProject.classList.add("add-project");
	projectList.classList.add("project-list");
}

function createTaskDisplaySection() {
	const mainSection = document.querySelector(".mainSection");
	const headerContainer = document.createElement("div");
	const sectionHeader = document.createElement("h1");
	const addTaskSection = document.createElement("div");

	headerContainer.classList.add("mainHeader");
	headerContainer.appendChild(sectionHeader);
	mainSection.appendChild(headerContainer);
	mainSection.appendChild(addTaskSection);
	sectionHeader.textContent = "All tasks";

	addTaskSection.classList.add("add-task-section");
}

export { CreateMain, createNavContent, createTaskDisplaySection };