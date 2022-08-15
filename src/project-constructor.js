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
 * Constructor Functions With Their Prototype Methods
 */

class Project {
	constructor(projectName) {
		this.name = projectName;
		this.taskArray = [];
	}
	setName(newName) {
		this.name = newName;
	}
}

class TodoTask {
	constructor(title, desc, date) {
		this.title = title;
		this.desc = desc;
		this.date = date;
		this.completed;
		this.important;
	}
	setDetails(newTitle, newDesc, newDate) {
		this.title = newTitle;
		this.desc = newDesc;
		this.date = newDate;
	}
	toggleComplete() {
		this.completed ? (this.completed = false) : (this.completed = true);
	}
	toggleImportance() {
		this.important ? (this.important = false) : (this.important = true);
	}
}

class ThemeSetter {
	constructor() {
		this.darkTheme;
	}
	toggleDarkTheme() {
		if (this.darkTheme === true) this.darkTheme = false;
		else this.darkTheme = true;
	}
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

export {
	projectArray,
	Project,
	TodoTask,
	setProjectArray,
	ThemeSetter,
	setTheTheme,
	theme,
};