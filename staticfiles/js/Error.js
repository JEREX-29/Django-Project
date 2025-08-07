// Get the theme switcher element
const colorSwitcher = document.querySelector("[data-theme-color-switch]");
let currentTheme = "light";

// Set up event listener for theme switching
colorSwitcher.addEventListener("click", () => {
  const root = document.documentElement;

  // Switch theme and update the root styles
  if (currentTheme === "dark") {
    root.style.setProperty("--bg-color", "#fff");
    root.style.setProperty("--text-color", "#000");
    colorSwitcher.textContent = "\u{1F319}"; // 🌙
    currentTheme = "light";
  } else {
    root.style.setProperty("--bg-color", "#050505");
    root.style.setProperty("--text-color", "#fff");
    colorSwitcher.textContent = "\u{2600}"; // ☀️
    currentTheme = "dark";
  }

  // Update the data-theme attribute for the switcher
  colorSwitcher.setAttribute("data-theme", currentTheme);
});
