function popUpDeleteAndEdit() {
  if (this.parentNode.parentNode.childNodes.length > 7) return;
  const deleteOrEditDiv = document.createElement("div");
  deleteOrEditDiv.classList.add("delete-edit-div");
  const editProject = document.createElement("p");
  editProject.classList.add("edit");
  editProject.textContent = "Edit";
  const deleteProject = document.createElement("p");
  deleteProject.textContent = "Delete";
  deleteOrEditDiv.append(editProject, deleteProject);
  this.parentNode.parentNode.appendChild(deleteOrEditDiv);
  deleteProject.addEventListener("mousedown", deleteProjectFromList);
}

function deleteProjectFromList() {
  this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
}

export { popUpDeleteAndEdit };
