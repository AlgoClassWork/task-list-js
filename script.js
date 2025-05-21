document.addEventListener('DOMContentLoaded', () => {

    const taskList = document.getElementById('taskList')

    let tasks = ['Покормить кота', 'Купить молоко', 'Сделать ДЗ']

    function renderTasks() {
        taskList.innerHTML = ''
        tasks.forEach(taskText => {
            const listItem = document.createElement('li')
            listItem.textContent = taskText
            taskList.appendChild(listItem)
        })
    }
    
    renderTasks()
})
