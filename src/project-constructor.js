let projectArray = [];

function Project(projectName) {
  this.name = projectName;
  this.taskArray = [];
  this.setName = (newName) => (this.name = newName);
}

function TodoTask(title, desc, date, completed, important) {
  this.title = title;
  this.desc = desc;
  this.date = date;
  this.completed = completed;
  this.important = important;
  this.setDetails = (newTitle, newDesc, newDate) => {
    this.title = newTitle;
    this.desc = newDesc;
    this.date = newDate;
  };
}

TodoTask.prototype.toggleComplete = function () {
  this.completed ? (this.completed = false) : (this.completed = true);
};

export { projectArray, Project, TodoTask };