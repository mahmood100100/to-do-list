import { saveTasksToLocalStorage } from "./localStorageHandler.js";
import {doneHandler} from "./doneTask.js";
import {deleteHandler , deleteCompletedHandler} from "./deleteHandler.js";
import {editHandler} from "./editHandler.js";
import { updateItemsLeft } from "./main.js";

export const addHandler = () => {
    const addInput = document.querySelector(".add-todo input");
    const addDescButton = document.querySelector(".add-todo button");
    const descList = document.querySelector(".add-desc");
    const addButton = document.querySelector(".add-desc button");
    const addDescInput = document.querySelector(".add-desc input");

    addDescButton.addEventListener("click", () => {
        let isDuplicate = false;
        const todoItemNames = document.querySelectorAll(".todo-item span");
        todoItemNames.forEach((todoItem) => {
            if (todoItem.innerHTML === addInput.value.trim()) {
                isDuplicate = true;
            }
        });

        if (addInput.value.trim() !== "" && !isDuplicate) {
            descList.style.display = "flex";
        } else {
            alert("the task name should not be null or duplicated");
        }
    });

    document.addEventListener("click", (event) => {
        if (!event.target.closest(".add-todo") && !event.target.closest(".add-desc")) {
            descList.style.display = "none";
        }
    });

    addButton.addEventListener("click", () => {
        const to_do_list = document.querySelector(".todo-list");
        const listItem = document.createElement('div');
        listItem.classList.add('todo-item');

        listItem.innerHTML = `
            <div class="task-name">
                <p>
                    <input type="checkbox">
                    <span>${addInput.value}</span>  
                </p>
                <div class="last">
                    <button>Edit</button>
                    <button class="delete-button">
                        <svg style="width: 20px; height : 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" fill="hsl(280, 87%, 65%)"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="task-desc">
                <p>description : ${addDescInput.value}</p>
            </div> 
        `;

        const lastTodoItem = to_do_list.lastElementChild;
        lastTodoItem.insertAdjacentElement('beforebegin', listItem);
        
        addInput.value = "";
        addDescInput.value = "";
        descList.style.display = "none";
        deleteHandler();
        editHandler();
        doneHandler();
        saveTasksToLocalStorage();
        deleteCompletedHandler();
        updateItemsLeft();
    });
};