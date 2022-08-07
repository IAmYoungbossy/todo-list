if (localStorage.getItem("projectArray") == null)
  localStorage.setItem("projectArray", JSON.stringify([]));

let projectArray = JSON.parse(localStorage.getItem("projectArray"));

function setProjectArray() {
  localStorage.setItem("projectArray", JSON.stringify(projectArray));
}

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

export { projectArray, Project, TodoTask, setProjectArray };
