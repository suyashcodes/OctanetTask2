function addTask() {
    const taskInput = document.getElementById('new-task');
    const deadlineInput = document.getElementById('deadline');
    const priorityInput = document.getElementById('priority');
    const labelsInput = document.getElementById('labels');

    const taskText = taskInput.value.trim();
    const deadline = deadlineInput.value;
    const priority = priorityInput.value;
    const labels = labelsInput.value.split(',');

    if (taskText !== '') {
        const tasksContainer = document.getElementById('tasks-container');
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.innerHTML = `
            <label>${taskText}</label>
            <div class="task-details">
                <span>Deadline: ${deadline}</span>
                <span>Priority: ${priority}</span>
                <span>Labels: ${labels.join(', ')}</span>
            </div>
            <button onclick="removeTask(this)">Delete</button>
        `;

        tasksContainer.appendChild(taskElement);
        taskInput.value = '';
        deadlineInput.value = '';
        priorityInput.value = 'high';
        labelsInput.value = '';
        updateProgressBar();
    }
}

function removeTask(button) {
    const taskElement = button.parentElement;
    taskElement.remove();
    updateProgressBar();
}

function updateProgressBar() {
    const tasksContainer = document.getElementById('tasks-container');
    const taskElements = tasksContainer.getElementsByClassName('task');
    const totalTasks = taskElements.length;

    const completedTasks = Array.from(taskElements).filter(task => task.querySelector('button') === null).length;
    const progressPercentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${progressPercentage}%`;
}
