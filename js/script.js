const themeToggle = document.querySelector(".theme-toggle");
const themeStorageKey = "portfolio-theme";

function setTheme(isDark) {
    document.body.classList.toggle("dark-theme", isDark);

    if (!themeToggle) {
        return;
    }

    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light theme" : "Switch to dark theme"
    );
    themeToggle.querySelector(".theme-toggle-icon").textContent = isDark ? "☀" : "☾";
    themeToggle.querySelector(".theme-toggle-text").textContent = isDark ? "Light" : "Dark";
}

let savedTheme = "light";

try {
    savedTheme = localStorage.getItem(themeStorageKey) || "light";
} catch (error) {
    console.warn("Could not read the saved theme preference.", error);
}

setTheme(savedTheme === "dark");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const isDark = !document.body.classList.contains("dark-theme");
        setTheme(isDark);

        try {
            localStorage.setItem(themeStorageKey, isDark ? "dark" : "light");
        } catch (error) {
            console.warn("Could not save the theme preference.", error);
        }
    });
}
