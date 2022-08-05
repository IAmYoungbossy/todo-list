import Menu from "./icons/menuIcon.png";
import ToDoLogo from "./icons/to-do.png";
import Theme from "./icons/theme.png";

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
  const myToDoLogo = new Image();
  const myThemeToggler = new Image();

  myMenuIcon.src = Menu;
  myToDoLogo.src = ToDoLogo;
  myThemeToggler.src = Theme;

  menuIcon.appendChild(myMenuIcon);
  toDoLogo.appendChild(myToDoLogo);
  themeToggler.appendChild(myThemeToggler);
}

export { createHeader, createHeaderContent };