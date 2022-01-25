const themeSwitch = document.querySelector("input[name='switch']");

themeSwitch.addEventListener("click", function () {
  let theme = getCurrentTheme();

  if (theme === "light") {
    theme = "dark";
  } else {
    theme = "light";
  }
  loadTheme(theme);
  localStorage.setItem("my.theme", `${theme}`);
});

function getCurrentTheme() {
  let theme =
    document.querySelector(":root").getAttribute("color-scheme") === "dark"
      ? "dark"
      : "light";
  localStorage.getItem("my.theme")
    ? (theme = localStorage.getItem("my.theme"))
    : null;
  return theme;
}

function loadTheme(theme) {
  if (theme == "dark") {
    themeSwitch.setAttribute("checked", true);
  }
  document.querySelector(":root").setAttribute("color-scheme", `${theme}`);
}

window.addEventListener("DOMContentLoaded", () => {
  loadTheme(getCurrentTheme());
});
