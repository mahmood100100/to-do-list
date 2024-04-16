import { saveTasksToLocalStorage } from "./localStorageHandler.js";
export const editHandler = () => {

    document.body.addEventListener("click", (event) => {
        if (!event.target.closest(".edit-desc") && !event.target.closest(".last button:first-of-type")) {
            document.querySelector(".edit-desc").style.display = "none";
        }
    });
    
    const editButtons = document.querySelectorAll(".todo-item .last button:first-of-type");

    editButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const todoItem = button.closest(".todo-item");
            const descText = todoItem.querySelector(".task-desc p");
            const editDescInput = document.querySelector(".edit-desc input");
            editDescInput.value = descText.textContent.replace("description :", "");
            document.querySelector(".edit-desc").style.display = "flex";
            const editDescButton = document.querySelector(".edit-desc button");
            editDescButton.addEventListener("click", () => {
                descText.textContent = `description : ${editDescInput.value}`;
                document.querySelector(".edit-desc").style.display = "none";
                saveTasksToLocalStorage()
            });
        });

    });
};