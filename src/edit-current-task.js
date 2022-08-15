import { projectIndex, taskIndex } from "./delete-edit-pop-up";
import { newTaskInput } from "./new-task-input";
import { projectArray, setProjectArray } from "./project-constructor";

function enableTaskEditing() {
	// currentTask is the current task being edited
	const currentTask =
    document.querySelector(".edit-task").parentNode.parentNode;
	const taskList = document.querySelector(".task-list");

	if (taskList) {
		for (let i = 0; i < taskList.childNodes.length; i++)
			if (taskList.childNodes[i].classList[0] == "task-input-form") return;
	}

	const getName = (function () {
		// Hides current task being edited
		currentTask.classList.add("hidden");

		let taskTitle = currentTask.childNodes[1].childNodes[0];
		let taskDesc = currentTask.childNodes[1].childNodes[1];
		let taskDate = currentTask.childNodes[3].childNodes[0].childNodes[0];
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

		// If taskList is not found, insert taskInputForm in all task section
		if (taskList) taskList.insertBefore(taskInputForm, previousTask);
		else
			document
				.querySelector(".add-task-section")
				.insertBefore(taskInputForm, currentTask.nextSibling);

		return { inputTitle, inputDesc, inputDate, taskInputForm };
	})();

	function updateNewTaskName() {
		if (document.querySelector(".title-input-form").value.trim() === "") return;
		if (document.querySelector(".title-input-form").value.trim() === "") return;

		getName.taskTitle.textContent = insertNewInput.inputTitle.value;
		getName.taskDesc.textContent = insertNewInput.inputDesc.value;
		getName.taskDate.textContent = insertNewInput.inputDate.value;

		updateNewTaskNameInArray(
			insertNewInput.inputTitle.value,
			insertNewInput.inputDesc.value,
			insertNewInput.inputDate.value
		);

		removeNewTaskInput();
	}

	function updateNewTaskNameInArray(title, desc, date) {
		projectArray[projectIndex].taskArray[taskIndex].setDetails(
			title,
			desc,
			date
		);
		setProjectArray();
	}

	function removeNewTaskInput() {
		insertNewInput.taskInputForm.parentNode.removeChild(
			insertNewInput.taskInputForm
		);

		// Removes hidden class from 'edited task'
		currentTask.classList.remove("hidden");
	}

	// EventListener on addTask and cancelTask Buttons
	(() => {
		document
			.querySelector(".cancel-task")
			.addEventListener("mousedown", removeNewTaskInput);

		document
			.querySelector(".add-task")
			.addEventListener("mousedown", updateNewTaskName);
	})();
}

function editCurentTask(e) {
	if (e.target.className == "edit-task") enableTaskEditing();
}

export { editCurentTask };