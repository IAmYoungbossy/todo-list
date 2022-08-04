let projectArray = [];

function Project(projectName) {
  this.name = projectName;
  this.taskArray = [];
}

function TodoTask(title, desc, date, completed, important) {
  this.title = title;
  this.desc = desc;
  this.date = date;
  this.completed = completed;
  this.important = important;
}

export { projectArray, Project, TodoTask };