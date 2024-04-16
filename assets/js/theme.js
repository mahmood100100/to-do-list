const themeImage = document.querySelector(".todo-header img");

const applyTheme = (theme) => {
    const root = document.documentElement;
    if (theme == "dark") {
        root.classList.add("dark-theme");
        themeImage.src = "./images/icon-sun.svg";
    } else {
        root.classList.remove("dark-theme");
        themeImage.src = "./images/icon-moon.svg";
    }
};

const themeHandler = () => {
    let theme = localStorage.getItem("theme");
    if (!theme) {
        theme = "light";
        localStorage.setItem("theme", theme);
    }
    applyTheme(theme);
    themeImage.addEventListener("click", () => {
        theme = theme == "dark" ? "light" : "dark";
        localStorage.setItem("theme", theme);
        applyTheme(theme);
    });
};

export default themeHandler;