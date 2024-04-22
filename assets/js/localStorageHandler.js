
export const loadTasksFromLocalStorage = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        const todoList = document.querySelector('.todo-list');

        tasks.forEach(task => {
            const listItem = document.createElement('div');
            listItem.classList.add('todo-item');

            listItem.innerHTML = `
                <div class="task-name">
                    <p>
                        <input type="checkbox" ${task.done ? 'checked' : ''}>
                        <span>${task.name}</span>
                    </p>
                    <div class="last">
                        <button>Edit</button>
                        <button class="delete-button">
                            <svg style="width: 20px; height: 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" fill="hsl(280, 87%, 65%)"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="task-desc">
                    <p>Description: ${task.description}</p>
                </div>
            `;

            const todoText = listItem.querySelector('.task-name span');
            const descText = listItem.querySelector('.task-desc p');
            if (task.done) {
                todoText.style.textDecoration = "line-through";
                todoText.style.color = "hsl(234, 11%, 52%)";
                descText.style.textDecoration = "line-through";
                descText.style.color = "hsl(234, 11%, 52%)";
            }
            const lastTodoItem = todoList.lastElementChild;
            lastTodoItem.insertAdjacentElement('beforebegin', listItem);
        });
    }
};

export const setTasksInLocalStorage = (newTask, action) => {

    let existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const taskName = newTask.querySelector('.task-name span').textContent;
    const taskDesc = newTask.querySelector('.task-desc p').textContent.replace("Description: ","");
    const isDone = newTask.querySelector('input[type="checkbox"]').checked;

    if (action === "save") {
        existingTasks.push({ name: taskName, description: taskDesc, done: isDone });
    } else if (action === "delete") {
        existingTasks = existingTasks.filter(task => (
            task.name.trim() !== taskName.trim() || task.description.trim() !== taskDesc.trim() || task.done !== isDone
        ));
    } else if(action === "modify") {
        existingTasks = existingTasks.map((task) => {
            if (task.name === taskName) {
                return { name: taskName, description: taskDesc, done: isDone };
            } else {
                return task;
            }
        });
    }

    localStorage.setItem('tasks', JSON.stringify(existingTasks));
};

export const setDataInLocalStorage = (key , data) => {
  return localStorage.setItem(key, JSON.stringify(data));
}

export const getDataFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
  }