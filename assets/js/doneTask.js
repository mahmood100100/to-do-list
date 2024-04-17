import { setTasksInLocalStorage } from "./localStorageHandler.js";
import { updateItemsLeft } from "./main.js";
export const doneHandler = () => {
    const checkboxes = document.querySelectorAll(".todo-item input[type='checkbox']");

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            
            updateItemsLeft()
            const todoItem = checkbox.closest(".todo-item");
            const todoText = todoItem.querySelector(".task-name span");
            const descText = todoItem.querySelector(".task-desc p");
            if (checkbox.checked) {
                todoText.style.textDecoration = "line-through";
                todoText.style.color = "hsl(234, 11%, 52%)";
                descText.style.textDecoration = "line-through";
                descText.style.color = "hsl(234, 11%, 52%)";
            } else {
                todoText.style.textDecoration = "none";
                todoText.style.color = "inherit";
                descText.style.textDecoration = "none";
                descText.style.color = "var(--items-color)";
            }
            setTasksInLocalStorage(todoItem , "modify");
        });
    });
};