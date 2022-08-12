import { setTheTheme, theme, ThemeSetter } from "./project-constructor";

function setTheme() {
  const darkThemeIcon = document.querySelectorAll(".dark");
  const lightThemeIcon = document.querySelectorAll(".light");

  Object.setPrototypeOf(theme, ThemeSetter.prototype);
  theme.toggleDarkTheme();
  setTheTheme();
  const root = document.documentElement;
  const newTheme = theme.darkTheme ? "darkT" : "lightT";
  root.className = newTheme;

  Object.setPrototypeOf(theme, ThemeSetter.prototype);
  theme.toggleLightIcon();
  setTheTheme();
  lightThemeIcon.forEach((icon) => {
    theme.lightIcon
      ? icon.classList.remove("light-hidden")
      : icon.classList.add("light-hidden");
  });

  Object.setPrototypeOf(theme, ThemeSetter.prototype);
  theme.toggleDarkIcon();
  setTheTheme();
  darkThemeIcon.forEach((icon) => {
    theme.darkIcon
      ? icon.classList.remove("dark-visible")
      : icon.classList.add("dark-visible");
  });
}

function toggleIcon() {
  Object.setPrototypeOf(theme, ThemeSetter.prototype);
  setTheTheme();
  document.querySelectorAll(".light").forEach((icon) => {
    if (theme.lightIcon === undefined) {
      icon.classList.remove("light-hidden");
    } else {
      theme.lightIcon
        ? icon.classList.add("light-hidden")
        : icon.classList.remove("light-hidden");
    }
  });

  Object.setPrototypeOf(theme, ThemeSetter.prototype);
  setTheTheme();
  document.querySelectorAll(".dark").forEach((icon) => {
    if (theme.darkIcon === undefined) {
      icon.classList.remove("dark-visible");
    } else {
      theme.darkIcon
        ? icon.classList.add("dark-visible")
        : icon.classList.remove("dark-visible");
    }
  });
}

function getThemeChoiceFromStorage() {
  Object.setPrototypeOf(theme, ThemeSetter.prototype);
  setTheTheme();
  const root = document.documentElement;
  const newTheme = theme.darkTheme ? "darkT" : "lightT";
  root.className = newTheme;
}

export { setTheme, getThemeChoiceFromStorage, toggleIcon };
