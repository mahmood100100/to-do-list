import { saveTasksToLocalStorage } from "./localStorageHandler.js";

export const doneHandler = () => {
    const checkboxes = document.querySelectorAll(".todo-item input[type='checkbox']");
    const itemsLeftSpan = document.querySelector('.items-remaining span');

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            const uncheckedCheckboxes = document.querySelectorAll(".todo-item input[type='checkbox']:not(:checked)");
            const itemsLeft = uncheckedCheckboxes.length;
            itemsLeftSpan.textContent = itemsLeft.toString();

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
            saveTasksToLocalStorage();
        });
    });
};