import themeHandler from "./theme.js";
import {addHandler} from "./addHandler.js";
import {doneHandler} from "./doneTask.js";
import {deleteHandler , deleteCompletedHandler} from "./deleteHandler.js";
import {editHandler} from "./editHandler.js";
import { loadTasksFromLocalStorage } from "./localStorageHandler.js";

export const updateItemsLeft = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const itemsLeft = tasks.filter(task => !task.done).length;
    const itemsLeftSpan = document.querySelector('.items-remaining span');
    itemsLeftSpan.textContent = itemsLeft;
};


document.addEventListener("DOMContentLoaded", () => {
    if(document.querySelector(".todo-list").childElementCount > 1){
        loadTasksFromLocalStorage();
        deleteHandler();
        doneHandler();
        editHandler();
        deleteCompletedHandler()
        updateItemsLeft();
    }
    themeHandler();
    addHandler();
});