import {loadTasksFromLocalStorage , setTasksInLocalStorage } from "./localStorageHandler.js"
import { deleteHandler } from "./deleteHandler.js";
import { doneHandler } from "./doneTask.js";
import { editHandler } from "./editHandler.js";
import { updateItemsLeft } from "./main.js";
export const filterByAll = () => {
    const toDoList = document.querySelector(".todo-list");
    const listChildren = Array.from(toDoList.children); // i make that because children here nodelist not array
    for (let i = 0; i < listChildren.length - 1; i++) {
        toDoList.removeChild(listChildren[i]);
    }
    loadTasksFromLocalStorage();
    doneHandler();
    editHandler();
    deleteHandler();
    updateItemsLeft();
}

export const filterByComplete = () => {
    const uncheckedCheckboxes = document.querySelectorAll(".todo-item input[type='checkbox']:not(:checked)");
    uncheckedCheckboxes.forEach(checkbox => {
        checkbox.closest(".todo-item").remove();
    });
}