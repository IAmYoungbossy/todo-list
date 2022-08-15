import Menu from "./icons/menuIcon.png";
import MenuDark from "./icons/menuIconDark.png";
import ToDoLogo from "./icons/to-do.png";
import Theme from "./icons/theme.png";
import ThemeDark from "./icons/themeDark.png";

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

function createHeaderContent() {
	const menuIcon = document.querySelector(".menuIcon");
	const toDoLogo = document.querySelector(".toDoLogo");
	const themeToggler = document.querySelector(".themeToggler");

	const myMenuIcon = new Image();
	const myMenuIconDark = new Image();
	const myToDoLogo = new Image();
	const myThemeToggler = new Image();
	const myThemeTogglerDark = new Image();

	myMenuIcon.src = Menu;
	myToDoLogo.src = ToDoLogo;
	myThemeToggler.src = Theme;
	myMenuIconDark.src = MenuDark;
	myThemeTogglerDark.src = ThemeDark;

	myMenuIcon.classList.add("menu-light", "light");
	myMenuIconDark.classList.add("menu-Dark", "dark");
	myThemeToggler.classList.add("theme-light", "light");
	myThemeTogglerDark.classList.add("theme-dark", "dark");

	menuIcon.append(myMenuIcon, myMenuIconDark);
	toDoLogo.appendChild(myToDoLogo);
	themeToggler.append(myThemeToggler, myThemeTogglerDark);
}

export { createHeader, createHeaderContent };