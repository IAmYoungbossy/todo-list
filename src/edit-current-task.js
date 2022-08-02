import { newTaskInput } from "./new-task-input";

function enableEditingTask() {
  const currentTask =
    document.querySelector(".edit-task").parentNode.parentNode;
  const taskList = document.querySelector(".task-list");

  for (let i = 0; i < taskList.childNodes.length; i++)
    if (taskList.childNodes[i].classList[0] == "task-input-form") return;

  const getName = (function () {
    currentTask.classList.add("hidden");
    let taskTitle = currentTask.childNodes[1].childNodes[0];
    let taskDesc = currentTask.childNodes[1].childNodes[1];
    let taskDate = currentTask.childNodes[3].childNodes[0];
    return { taskTitle, taskDesc, taskDate };
  })();

  newTaskInput();

  const insertNewInput = (function () {
    const previousTask = currentTask.nextElementSibling;
    const taskInputForm = document.querySelector(".task-input-form");
    const inputTitle = document.querySelector(".title-input-form");
    const inputDesc = document.querySelector(".text-area-form");
    const inputDate = document.querySelector(".date-input-form");
    inputTitle.value = getName.taskTitle.textContent;
    inputDesc.value = getName.taskDesc.textContent;
    inputDate.value = getName.taskDate.textContent;
    taskList.insertBefore(taskInputForm, previousTask);
    return { inputTitle, inputDesc, inputDate, taskInputForm };
  })();

  function updateNewProjectName() {
    getName.taskTitle.textContent = insertNewInput.inputTitle.value;
    getName.taskDesc.textContent = insertNewInput.inputDesc.value;
    getName.taskDate.textContent = insertNewInput.inputDate.value;
    removeInputForm();
  }

  function removeInputForm() {
    insertNewInput.taskInputForm.parentNode.removeChild(
      insertNewInput.taskInputForm
    );
    currentTask.classList.remove("hidden");
  }

  (() => {
    const add = document.querySelector(".add-task");
    const cancel = document.querySelector(".cancel-task");
    cancel.addEventListener("mousedown", removeInputForm);
    add.addEventListener("mousedown", updateNewProjectName);
  })();
}

function editCurentTask(e) {
  if (e.target.className == "edit-task") enableEditingTask();
}

export { editCurentTask };