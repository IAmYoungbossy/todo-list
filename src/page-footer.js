function createfooter() {
	const body = document.querySelector("body");
	const footer = document.createElement("footer");
	const anchorLink = document.createElement("a");
	const gitHubIcon = document.createElement("i");
	const iconsCredit = document.createElement("p");
	const flatIconAnchor = document.createElement("a");
	const icons8Anchor = document.createElement("a");

	flatIconAnchor.textContent = " Flaticon ";
	icons8Anchor.textContent = " Icons8 ";
	iconsCredit.append("Icons by", flatIconAnchor, " & ", icons8Anchor);
	anchorLink.appendChild(gitHubIcon);

	flatIconAnchor.setAttribute("target", "_blank");
	icons8Anchor.setAttribute("target", "_blank");
	flatIconAnchor.setAttribute("href", "https://www.flaticon.com/");
	icons8Anchor.setAttribute("href", "https://icons8.com/");
	anchorLink.setAttribute("href", "https://github.com/IAmYoungbossy/todo-list");
	gitHubIcon.classList.add("fa", "fa-github");
	footer.append(
		"Copyright \u00A9 2022 IAmYoungbossy",
		"  ",
		anchorLink,
		iconsCredit
	);
	body.appendChild(footer);
}

export { createfooter };