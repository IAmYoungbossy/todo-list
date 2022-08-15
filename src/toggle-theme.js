import { setTheTheme, theme, ThemeSetter } from "./project-constructor";

// This function toggles between dark and light themes
function setTheme() {
	const darkThemeIcon = document.querySelectorAll(".dark");
	const lightThemeIcon = document.querySelectorAll(".light");
	const root = document.documentElement;
	let newTheme;

	// Add back ThemeSetter prototype to enable toggle method
	Object.setPrototypeOf(theme, ThemeSetter.prototype);
	theme.toggleDarkTheme();
	setTheTheme();
	if (theme.darkTheme) newTheme = "darkT";
	else newTheme = "lightT";
	root.className = newTheme;

	lightThemeIcon.forEach((icon) => {
		if (theme.darkTheme) icon.classList.add("light-hidden");
		else icon.classList.remove("light-hidden");
	});

	darkThemeIcon.forEach((icon) => {
		if (theme.darkTheme) icon.classList.add("dark-visible");
		else icon.classList.remove("dark-visible");
	});
}

// Retrieves icon state from storage on page reload
function toggleIcon() {
	Object.setPrototypeOf(theme, ThemeSetter.prototype);
	setTheTheme();
	document.querySelectorAll(".light").forEach((icon) => {
		if (theme.darkTheme) icon.classList.add("light-hidden");
		else icon.classList.remove("light-hidden");
	});

	Object.setPrototypeOf(theme, ThemeSetter.prototype);
	setTheTheme();
	document.querySelectorAll(".dark").forEach((icon) => {
		if (theme.darkTheme) icon.classList.add("dark-visible");
		else icon.classList.remove("dark-visible");
	});
}

// Retrieves theme state from storage on page reload
function getThemeChoiceFromStorage() {
	Object.setPrototypeOf(theme, ThemeSetter.prototype);
	setTheTheme();
	const root = document.documentElement;
	const newTheme = theme.darkTheme ? "darkT" : "lightT";
	root.className = newTheme;
}

export { setTheme, getThemeChoiceFromStorage, toggleIcon };