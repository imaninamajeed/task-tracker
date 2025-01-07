document.addEventListener("DOMContentLoaded", () => {
    const tasks = [];
    const taskList = document.getElementById("taskList"); // <ul id="taskList"></ul>
    const taskInput = document.getElementById("taskInput"); // <input id="taskInput" type="text" />
    const addTaskButton = document.getElementById("addTaskButton"); // <button id="addTaskButton">Add Task</button>

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = task.description;
            listItem.className = task.completed ? 'completed' : '';

            const completeButton = document.createElement("button");
            completeButton.textContent = task.completed ? 'Uncomplete' : 'Complete';
            completeButton.addEventListener('click', () => toggleComplete(index));

            const deleteButton = document.createElement("button");
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteTask(index));

            listItem.appendChild(completeButton);
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);
        });
        console.log(tasks);
    }

    function addTask() {
        const taskDescription = taskInput.value.trim();
        if (taskDescription) {
            tasks.push({ description: taskDescription, completed: false });
            taskInput.value = '';
            renderTasks();
        }
    }

    function toggleComplete(index) {
        tasks[index].completed = !tasks[index].completed;
        tasks.sort((a, b) => a.completed - b.completed);
        renderTasks();
    }

    function deleteTask(index) {
        tasks.splice(index, 1);
        renderTasks();
    }

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    renderTasks();
});
