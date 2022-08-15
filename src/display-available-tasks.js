import { createProject, removeProjectLists } from "./add-new-project";
import { Project, projectArray, setProjectArray } from "./project-constructor";
import { displayAllTasks } from "./task-grouping";
import { getThemeChoiceFromStorage, toggleIcon } from "./toggle-theme";

// Display all available projects and tasks on page load.
function DisplayAllTasksOnPageLoad() {
  if (localStorage.getItem("projectArray") === null)
    localStorage.setItem("projectArray", JSON.stringify([]));
  else {
    projectArray.forEach((project) => {
      Object.setPrototypeOf(project, Project.prototype);
      setProjectArray();
      removeProjectLists();
      createProject();
    });
    displayAllTasks();
    document.querySelector("li").classList.add("selected");
  }

  getThemeChoiceFromStorage();
  toggleIcon();
  document.querySelectorAll("li").forEach(li => {
    li.setAttribute("draggable", "true");
  })
}

export { DisplayAllTasksOnPageLoad };