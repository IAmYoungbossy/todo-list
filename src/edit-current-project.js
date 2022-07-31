import { getProjectInput } from "./project-input";

function editCurentProject() {
  const editButton = document.querySelector(".edit");
  if (!!editButton) {
    const projectList = document.querySelector(".project-list");
    for (let i = 0; i < projectList.childNodes.length; i++) {
      if (projectList.childNodes[i].classList[0] == "input-Li") return;
    }
    const parentCurentProject = editButton.parentNode.parentNode;
    parentCurentProject.classList.add("hidden");
    const children = parentCurentProject.childNodes;
    const childrenArray = Array.from(children);
    let previousProjectName = childrenArray[1].data;
    if (previousProjectName === undefined) {
      const childArray = Array.from(childrenArray[1].childNodes);
      previousProjectName = childArray[0].data;
    }
    getProjectInput();
    const previousProject =
      document.querySelector(".hidden").nextElementSibling;
    const add = document.querySelector(".add");
    const cancel = document.querySelector(".cancel");
    const nameInput = document.querySelector(".name-input");
    nameInput.value = previousProjectName;
    const inputForm = document.querySelector(".input-Li");
    projectList.insertBefore(inputForm, previousProject);

    function updateNewProjectName() {
      const newProjectName = document.createElement("p");
      newProjectName.textContent = nameInput.value;
      parentCurentProject.replaceChild(
        newProjectName,
        parentCurentProject.childNodes[1]
      );
      removeInputForm();
      parentCurentProject.classList.remove("hidden");
    }
    function removeInputForm() {
      inputForm.parentNode.removeChild(inputForm);
      parentCurentProject.classList.remove("hidden");
    }
    cancel.addEventListener("mousedown", removeInputForm);
    add.addEventListener("mousedown", updateNewProjectName);
  }
}

export { editCurentProject };
