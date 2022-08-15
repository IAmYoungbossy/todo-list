import AddTask from "./icons/addTask.png";

function todoAddButton() {
	const addTaskSection = document.querySelector(".add-task-section");
	const taskList = document.createElement("ul");
	const addTaskButton = document.createElement("li");
	const myAddTask = new Image();

	myAddTask.src = AddTask;
	addTaskButton.append(myAddTask, "Add Task");
	taskList.appendChild(addTaskButton);
	addTaskSection.appendChild(taskList);

	taskList.classList.add("task-list");
	addTaskButton.classList.add("add-task-button");
}

export { todoAddButton };