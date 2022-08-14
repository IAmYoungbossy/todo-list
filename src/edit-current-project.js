import {
  createProject,
  getSelectedProjectIndex,
  projectArrayIndex,
  removeProjectLists,
  setSelectedClass,
} from "./add-new-project";
import { projectArray, setProjectArray } from "./project-constructor";
import { getProjectInput } from "./project-input";

function enableEditing() {
  const project = document.querySelector(".edit").parentNode.parentNode;
  const projectList = document.querySelector(".project-list");

  // For loop to check if there is an existing form opened, if true it returns
  for (let i = 0; i < projectList.childNodes.length; i++)
    if (projectList.childNodes[i].classList[0] == "input-Li") return;

  const getName = (function () {
    project.classList.add("hidden");
    let projectName = project.children[1];
    let previousName = projectName.textContent;
    return { previousName, projectName };
  })();

  getProjectInput();

  const insertGetProjectInput = (function () {
    const nextElement = document.querySelector(".hidden").nextElementSibling;
    const nameInput = document.querySelector(".name-input");
    const inputForm = document.querySelector(".input-Li");
    nameInput.value = getName.previousName;
    projectList.insertBefore(inputForm, nextElement);
    return {
      inputForm,
      nameInput,
    };
  })();

  function updateNewProjectName() {
    if (document.querySelector(".name-input").value.trim() === "") return;
    editProjectArrayName();
    replaceOldNameInDom();
    removeInputForm();
    getSelectedProjectIndex();
    removeProjectLists();
    createProject();
    project.classList.remove("hidden");
    setSelectedClass();
  }

  function editProjectArrayName() {
    projectArray[projectArrayIndex].setName(
      insertGetProjectInput.nameInput.value
    );
    setProjectArray();
  }

  function replaceOldNameInDom() {
    getName.projectName = insertGetProjectInput.nameInput.value;
  }

  function removeInputForm() {
    insertGetProjectInput.inputForm.parentNode.removeChild(
      insertGetProjectInput.inputForm
    );
    project.classList.remove("hidden");
  }

  // EventListener on cancel and add buttons
  (() => {
    document
      .querySelector(".cancel")
      .addEventListener("mousedown", removeInputForm);
    document
      .querySelector(".add")
      .addEventListener("mousedown", updateNewProjectName);
  })();
}

function editCurentProject(e) {
  if (e.target.className == "edit") enableEditing();
}

export { editCurentProject };