const themeImage = document.querySelector(".todo-header img");
const themeHandler  = (themeImage) => {
    themeImage.addEventListener("click", () => {
        const root = document.documentElement;
        if(root.style.getPropertyValue("--body-bg-color") == "var(--body-bg-dark-color)") {
            root.style.setProperty("--body-bg-color", "var(--body-bg-light-color)")
            root.style.setProperty("--items-bg-color", "var(--items-bg-light-color)")
            root.style.setProperty("--items-color", "var(--items-dark-color");
            root.style.setProperty("--body-min-image-theme", "var(--body-min-image-light-theme)")
            root.style.setProperty("--body-image-theme", "var(--body-image-light-theme")
            themeImage.src = "./images/icon-moon.svg"
        }else {
        root.style.setProperty("--body-bg-color", "var(--body-bg-dark-color)")
        root.style.setProperty("--items-bg-color", "var(--items-bg-dark-color)")
        root.style.setProperty("--items-color", "var(--items-light-color)")
        root.style.setProperty("--body-min-image-theme", "var(--body-min-image-dark-theme)")
        root.style.setProperty("--body-image-theme", "var(--body-image-dark-theme")
        themeImage.src = "./images/icon-sun.svg"
    }
    })
}
themeHandler(themeImage)
