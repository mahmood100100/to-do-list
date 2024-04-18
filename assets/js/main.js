import themeHandler from "./theme.js";
import {addHandler , checkEmptyAndDuplicate} from "./addHandler.js";
import {doneHandler} from "./doneTask.js";
import {deleteHandler , deleteCompletedHandler} from "./deleteHandler.js";
import {editHandler} from "./editHandler.js";
import { loadTasksFromLocalStorage } from "./localStorageHandler.js";
import { filterByAll , filterByComplete } from "./filterHandler.js";
export const updateItemsLeft = () => {
    const itemsLeftSpan = document.querySelector('.items-remaining span');
    const uncheckedCheckboxes = document.querySelectorAll(".todo-item input[type='checkbox']:not(:checked)");
    const itemsLeft = uncheckedCheckboxes.length;
    itemsLeftSpan.textContent = itemsLeft.toString();
};

document.addEventListener("DOMContentLoaded", () => {
    themeHandler();
    loadTasksFromLocalStorage();
    if(document.querySelector(".todo-list").childElementCount > 1){
        deleteHandler();
        doneHandler();
        editHandler();
        updateItemsLeft();
    }
});

window.onAddDescButtonClicked = () => {
    checkEmptyAndDuplicate();
};
window.onAddButtonClicked = () => {
    addHandler();
};
window.onClearCompletedButtonClicked = () => {
    deleteCompletedHandler()
}

window.onFilterAllButtonClicked = () => {
    filterByAll();
    document.querySelector(".filter button:last-of-type").style.color = "var(--items-color)"
    document.querySelector(".filter button:first-of-type").style.color = "hsl(280, 87%, 65%)" 
}
window.onFilterCompletedButtonClicked = () => {
    filterByComplete();
    document.querySelector(".filter button:last-of-type").style.color = "hsl(280, 87%, 65%)"
    document.querySelector(".filter button:first-of-type").style.color = "var(--items-color)";
}