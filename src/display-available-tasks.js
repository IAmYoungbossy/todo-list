import { createProject, removeProjectLists } from "./add-new-project";
import { Project, projectArray, setProjectArray } from "./project-constructor";
import { displayAllTasks } from "./task-grouping";

// Display all available projects and tasks on page load.
function DisplayAllTasksOnPageLoad(e) {
  if (localStorage.getItem("projectArray") === null)
    localStorage.setItem("projectArray", JSON.stringify([]));
  else {
    projectArray.forEach((project) => {
      Object.setPrototypeOf(project, Project.prototype);
      setProjectArray();
      removeProjectLists();
      createProject();
    });
    displayAllTasks(e);
  }
}

export { DisplayAllTasksOnPageLoad };
