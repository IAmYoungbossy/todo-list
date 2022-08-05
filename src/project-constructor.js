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

export { projectArray, Project, TodoTask };