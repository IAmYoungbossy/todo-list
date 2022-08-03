import { getProjectInput } from "./project-input";

function enableEditing() {
  const project = document.querySelector(".edit").parentNode.parentNode;
  const projectList = document.querySelector(".project-list");

  for (let i = 0; i < projectList.childNodes.length; i++)
    if (projectList.childNodes[i].classList[0] == "input-Li") return;

  const getName = (function () {
    project.classList.add("hidden");
    const children = project.childNodes;
    const childrenArray = Array.from(children);
    let previousName = childrenArray[1].data;
    if (previousName === undefined) {
      const childArray = Array.from(childrenArray[1].childNodes);
      previousName = childArray[0].data;
    }
    return { previousName };
  })();

  getProjectInput();

  const insertGetProjectInput = (function () {
    const previousProject =
      document.querySelector(".hidden").nextElementSibling;
    const nameInput = document.querySelector(".name-input");
    const inputForm = document.querySelector(".input-Li");
    nameInput.value = getName.previousName;
    projectList.insertBefore(inputForm, previousProject);
    return {
      inputForm,
      nameInput,
    };
  })();

  function updateNewProjectName() {
    if (document.querySelector(".name-input").value.trim() === "") return;
    const newProjectName = document.createElement("p");
    newProjectName.textContent = insertGetProjectInput.nameInput.value;
    project.replaceChild(newProjectName, project.childNodes[1]);
    removeInputForm();
    project.classList.remove("hidden");
  }

  function removeInputForm() {
    insertGetProjectInput.inputForm.parentNode.removeChild(
      insertGetProjectInput.inputForm
    );
    project.classList.remove("hidden");
  }

  (() => {
    const add = document.querySelector(".add");
    const cancel = document.querySelector(".cancel");
    cancel.addEventListener("mousedown", removeInputForm);
    add.addEventListener("mousedown", updateNewProjectName);
  })();
}

function editCurentProject(e) {
  if (e.target.className == "edit") enableEditing();
}

export { editCurentProject };