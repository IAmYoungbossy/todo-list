/**
 * ProjectArray LocalStorage
 */

if (localStorage.getItem("projectArray") == null)
  localStorage.setItem("projectArray", JSON.stringify([]));

let projectArray = JSON.parse(localStorage.getItem("projectArray"));

function setProjectArray() {
  localStorage.setItem("projectArray", JSON.stringify(projectArray));
}

/**
 * Theme LocalStorage
 */

if (localStorage.getItem("theme") == null)
  localStorage.setItem("theme", JSON.stringify(new ThemeSetter()));

let theme = JSON.parse(localStorage.getItem("theme"));

function setTheTheme() {
  localStorage.setItem("theme", JSON.stringify(theme));
}

/**
 * Constructor Functions With Their Prototype Methods
 */

function Project(projectName) {
  this.name = projectName;
  this.taskArray = [];
}

Project.prototype.setName = function (newName) {
  this.name = newName;
};

function TodoTask(title, desc, date) {
  this.title = title;
  this.desc = desc;
  this.date = date;
  this.completed;
  this.important;
}
TodoTask.prototype.setDetails = function (newTitle, newDesc, newDate) {
  this.title = newTitle;
  this.desc = newDesc;
  this.date = newDate;
};

TodoTask.prototype.toggleComplete = function () {
  this.completed ? (this.completed = false) : (this.completed = true);
};

TodoTask.prototype.toggleImportance = function () {
  this.important ? (this.important = false) : (this.important = true);
};

function ThemeSetter() {
  this.darkTheme;
  this.lightIcon;
  this.darkIcon;
}

ThemeSetter.prototype.toggleDarkTheme = function () {
  this.darkTheme ? (this.darkTheme = false) : (this.darkTheme = true);
};

ThemeSetter.prototype.toggleLightIcon = function () {
  this.lightIcon ? (this.lightIcon = false) : (this.lightIcon = true);
};

ThemeSetter.prototype.toggleDarkIcon = function () {
  this.darkIcon ? (this.darkIcon = false) : (this.darkIcon = true);
};

export {
  projectArray,
  Project,
  TodoTask,
  setProjectArray,
  ThemeSetter,
  setTheTheme,
  theme,
};