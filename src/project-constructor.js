let projectArray = [];

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

export { projectArray, Project, TodoTask };