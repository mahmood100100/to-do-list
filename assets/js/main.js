const themeImage = document.querySelector(".todo-header img");
const themeHandler = (themeImage) => {
    themeImage.addEventListener("click", () => {
        const root = document.documentElement;
        if (root.style.getPropertyValue("--body-bg-color") == "var(--body-bg-dark-color)") {
            root.style.setProperty("--body-bg-color", "var(--body-bg-light-color)")
            root.style.setProperty("--items-bg-color", "var(--items-bg-light-color)")
            root.style.setProperty("--items-color", "var(--items-dark-color");
            root.style.setProperty("--body-min-image-theme", "var(--body-min-image-light-theme)")
            root.style.setProperty("--body-image-theme", "var(--body-image-light-theme")
            themeImage.src = "./images/icon-moon.svg"
        } else {
            root.style.setProperty("--body-bg-color", "var(--body-bg-dark-color)")
            root.style.setProperty("--items-bg-color", "var(--items-bg-dark-color)")
            root.style.setProperty("--items-color", "var(--items-light-color)")
            root.style.setProperty("--body-min-image-theme", "var(--body-min-image-dark-theme)")
            root.style.setProperty("--body-image-theme", "var(--body-image-dark-theme")
            themeImage.src = "./images/icon-sun.svg"
        }
    })
}

let list = "";
const addButton = document.querySelector(".add-todo button");

const addHandler = (addButton) => {
    const addInput = document.querySelector(".add-todo input");
    const to_do_list = document.querySelector(".todo-list");

    addButton.addEventListener("click", () => {
        const todoItemNames = document.querySelectorAll(".todo-item span");

        let isDuplicate = false;

        todoItemNames.forEach((todoItem) => {
            if (todoItem.innerHTML === addInput.value.trim()) {
                isDuplicate = true;
            }
        });

        if (addInput.value.trim() !== "" && !isDuplicate) {
            const list = `
                <div class="todo-item">
                    <p>
                        <input type="checkbox">
                        <span>${addInput.value}</span>
                    </p>
                    <div class="last">
                        <button>Edit</button>
                        <button>
                            <svg style="width: 20px; height : 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" fill="hsl(280, 87%, 65%)"/>
                            </svg>
                        </button>
                    </div>
                </div>
            `;
            const lastTodoItem = to_do_list.lastElementChild;
            lastTodoItem.insertAdjacentHTML("beforebegin", list);
            addInput.value = "";
        } else if (isDuplicate) {
            alert("Task name must be unique.");
        }else {
            alert("task name cannot be empty");
        }
        doneHandler()
        deleteHandler()
    });
};
const doneHandler = () => {
    const checkboxes = document.querySelectorAll(".todo-item input[type='checkbox']");

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            const todoItem = checkbox.closest(".todo-item");
            const todoText = todoItem.querySelector("span");
            if (checkbox.checked) {
                todoText.style.textDecoration = "line-through";
                todoText.style.color = "hsl(234, 11%, 52%)";
            } else {
                todoText.style.textDecoration = "none";
                todoText.style.color = "inherit";
            }
        });
    });
};

const deleteHandler = () => {
    const deleteButtons = document.querySelectorAll(".todo-item .last button:last-of-type");

    deleteButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const todoItem = button.closest(".todo-item");
            todoItem.remove();
        });
    });
};

themeHandler(themeImage)
addHandler(addButton)