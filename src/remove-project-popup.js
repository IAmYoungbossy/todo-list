const removeDeleteAndEditPopUp = (e) => {
	if (document.querySelector(".delete-edit-div")) {
		if (e.target.className == "edit") {
			return;
		} else {
			document
				.querySelector(".delete-edit-div")
				.parentNode.removeChild(document.querySelector(".delete-edit-div"));
		}
	} else if (document.querySelector(".delete-edit-task")) {
		if (e.target.className == "edit-task") {
			return;
		} else {
			document
				.querySelector(".delete-edit-task")
				.parentNode.removeChild(document.querySelector(".delete-edit-task"));
		}
	}
};
export { removeDeleteAndEditPopUp };