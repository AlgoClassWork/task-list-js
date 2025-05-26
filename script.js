document.addEventListener('DOMContentLoaded', () => {

    const taskList = document.getElementById('taskList')
    const taskInput = document.getElementById('newTaskInput')
    const addTaskButton = document.getElementById('addTaskButton')

    let tasks = []

    function renderTasks() {
        taskList.innerHTML = ''

        if (tasks.length === 0) {
            const emptyMessage = document.createElement('p')
            emptyMessage.textContent = 'Список дел пуст!'
            emptyMessage.style.textAlign = 'center'
            taskList.appendChild(emptyMessage)
        }

        tasks.forEach(taskObject => {
            const listItem = document.createElement('li')

            if (taskObject.completed) {
                listItem.classList.add('completed')
            }

            const taskTextSpan = document.createElement('span')
            taskTextSpan.textContent = taskObject.text

            listItem.appendChild(taskTextSpan)
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
