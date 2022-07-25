import './style.css';
import Menu from './icons/menuIcon.png';
import ToDoLogo from './icons/to-do.png';
import Theme from './icons/theme.png';
import AllTasks from './icons/planning.png';
import Today from './icons/calendar.png';
import ThisWeek from './icons/next-week.png';
import Important from './icons/checklist.png';

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

function createNavContent(){
  const nav = document.querySelector('.nav');
  const home = document.createElement('div');
  home.classList.add('home');
  const project = document.createElement('div');
  project.classList.add('project');
  const horizontalRule = document.createElement('hr');
  nav.appendChild(home);
  nav.appendChild(project);

  const navHeader = document.createElement('h2');
  const unorderedList = document.createElement('ul');
  const allTasks = document.createElement('li');
  const today = document.createElement('li');
  const thisWeek = document.createElement('li');
  const important = document.createElement('li');

  const myAllTasks = new Image();
  myAllTasks.src = AllTasks;
  allTasks.appendChild(myAllTasks);
  const myToday = new Image();
  myToday.src = Today;
  today.appendChild(myToday);
  const myThisWeek = new Image();
  myThisWeek.src = ThisWeek;
  thisWeek.appendChild(myThisWeek);
  const  myImportant = new Image();
  myImportant.src = Important;

  important.appendChild(myImportant);
  unorderedList.appendChild(allTasks);
  unorderedList.appendChild(today);
  unorderedList.appendChild(thisWeek);
  unorderedList.appendChild(important);
  home.appendChild(navHeader);
  home.appendChild(horizontalRule);
  home.appendChild(unorderedList);

  navHeader.textContent = 'Home';
  allTasks.append('All Tasks');
  today.append('Today');
  thisWeek.append('This Week');
  important.append('Important');

  const projectHeader = document.createElement('h2');
  projectHeader.textContent = 'Projects'
  project.appendChild(projectHeader);
  const horizontalRule2 = document.createElement('hr');
  project.appendChild(horizontalRule2);
}
createNavContent();

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