import { setTasksInLocalStorage } from "./localStorageHandler.js";
import { updateItemsLeft } from "./main.js";

export const deleteHandler = () => {
    const deleteButtons = document.querySelectorAll(".todo-item .last button:last-of-type");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const todoItem = button.closest(".todo-item");
            todoItem.remove();
            setTasksInLocalStorage(todoItem , "delete");
            updateItemsLeft()
        });
    });
};

export const deleteCompletedHandler = () => {
        const todoList = document.querySelector(".todo-list");
        const completedTaskElements = document.querySelectorAll(".todo-item input:checked");
        completedTaskElements.forEach(taskElement => {
            const todoItem = taskElement.closest(".todo-item");
            todoList.removeChild(todoItem);
            setTasksInLocalStorage(todoItem , "delete");
        })
        updateItemsLeft();
};