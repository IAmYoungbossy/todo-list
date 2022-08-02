import { getProjectInput } from "./project-input";

function editCurentProject() {
  const editButton = document.querySelector(".edit");

  if (!!editButton) {
    const project = editButton.parentNode.parentNode;
    const projectList = document.querySelector(".project-list");
    for (let i = 0; i < projectList.childNodes.length; i++) {
      if (projectList.childNodes[i].classList[0] == "input-Li") return;
    }

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

    const inserInputForm = (function () {
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
      const newProjectName = document.createElement("p");
      newProjectName.textContent = inserInputForm.nameInput.value;
      project.replaceChild(newProjectName, project.childNodes[1]);
      removeInputForm();
      project.classList.remove("hidden");
    }

    function removeInputForm() {
      inserInputForm.inputForm.parentNode.removeChild(inserInputForm.inputForm);
      project.classList.remove("hidden");
    }

    const add = document.querySelector(".add");
    const cancel = document.querySelector(".cancel");
    cancel.addEventListener("mousedown", removeInputForm);
    add.addEventListener("mousedown", updateNewProjectName);
  }
}

export { editCurentProject };