document.addEventListener('DOMContentLoaded', () => {

    const taskList = document.getElementById('taskList')
    const taskInput = document.getElementById('newTaskInput')
    const addTaskButton = document.getElementById('addTaskButton')

    let tasks = []

    function renderTasks() {
        taskList.innerHTML = ''
        tasks.forEach(taskObject => {
            const listItem = document.createElement('li')
            listItem.textContent = taskObject.text
            taskList.appendChild(listItem)
        })
    }

    function addTask() {
        const taskText = taskInput.value.trim()
        if (taskText === '') {
            alert('Пожайлуста, введите текст задачи!')
            return
        }
        const newTask = {
            id : Date.now(),
            text: taskText,
            completed: false
        }
        tasks.push(newTask)
        taskInput.value = ''
        renderTasks()
    }

    addTaskButton.addEventListener('click', addTask)
    renderTasks()
})
