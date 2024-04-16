import { saveTasksToLocalStorage } from "./localStorageHandler.js";
import { updateItemsLeft } from "./main.js";

export const deleteHandler = () => {
    const deleteButtons = document.querySelectorAll(".todo-item .last button:last-of-type");
    console.log(deleteButtons)
    deleteButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const todoItem = button.closest(".todo-item");
            todoItem.remove();
            saveTasksToLocalStorage()
        });
    });
};

export const deleteCompletedHandler = () => {
    const deleteCompletedButton = document.querySelector(".properities .clear-done button");

    deleteCompletedButton.addEventListener("click", () => {
        const todoList = document.querySelector(".todo-list");
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        const remainingTasks = tasks.filter(task => !task.done);
        const completedTaskElements = document.querySelectorAll(".todo-item input:checked");
        completedTaskElements.forEach(taskElement => {
            const todoItem = taskElement.closest(".todo-item");
            todoList.removeChild(todoItem);
        })
        localStorage.setItem('tasks', JSON.stringify(remainingTasks));
        updateItemsLeft();
    });
};