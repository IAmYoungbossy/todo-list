import './style.css';
import Menu from './icons/menuIcon.png';
import ToDoLogo from './icons/to-do.png';
import Theme from './icons/theme.png';

function createHeader(){
  const body = document.querySelector('body');
  const header = document.createElement('header');
  const menuIcon = document.createElement('div');
  const toDoLogo = document.createElement('div');
  const themeToggler = document.createElement('div');
  menuIcon.classList.add('menuIcon');
  toDoLogo.classList.add('toDoLogo');
  themeToggler.classList.add('themeToggler');
  header.appendChild(menuIcon);
  header.appendChild(toDoLogo);
  header.appendChild(themeToggler);
  body.appendChild(header);
}
createHeader();

function createHeaderContent(){
  const menuIcon = document.querySelector('.menuIcon');
  const toDoLogo = document.querySelector('.toDoLogo');
  const themeToggler = document.querySelector('.themeToggler');
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

function CreateMain(){
  const body = document.querySelector('body');
  const mainBodyContainer = document.createElement('main');
  const nav = document.createElement('nav');
  nav.classList.add('nav');
  const mainSection = document.createElement('section');
  mainSection.classList.add('mainSection');
  mainBodyContainer.appendChild(nav);
  mainBodyContainer.appendChild(mainSection);
  body.appendChild(mainBodyContainer);
}
CreateMain();

function createfooter(){
  const body = document.querySelector('body');
  const footer = document.createElement('footer');
  const anchorLink = document.createElement('a');
  const gitHubIcon = document.createElement('i');
  anchorLink.appendChild(gitHubIcon);
  footer.append('Copyright \u00A9 2022 IAmYoungbossy');
  footer.appendChild(anchorLink);
  body.appendChild(footer);
  anchorLink.setAttribute('href', 'https:////github.com/IAmYoungbossy/calculator');
  gitHubIcon.classList.add('fa','fa-github');
  gitHubIcon.style.cssText = 'color:black';
}
createfooter();