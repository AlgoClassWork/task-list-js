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

            const actionsDiv = document.createElement('div')
            actionsDiv.classList.add('actions')

            const completeButton = document.createElement('button')
            completeButton.textContent = taskObject.completed ? 'Отменить' : 'Готово'
            completeButton.classList.add('complete-btn')

            completeButton.addEventListener('click', () => {
                completeTask(taskObject.id)
            })

            const deleteButton = document.createElement('button')
            deleteButton.textContent = 'Удалить'
            deleteButton.classList.add('delete-btn')

            deleteButton.addEventListener('click', () => {
                deleteTask(taskObject.id)
            })

            actionsDiv.appendChild(completeButton)
            actionsDiv.appendChild(deleteButton)
            listItem.appendChild(taskTextSpan)
            listItem.appendChild(actionsDiv)
            taskList.appendChild(listItem)
        })
    }

    function deleteTask(taskId) {
        tasks = tasks.filter(task => task.id !== taskId)
        renderTasks()
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
