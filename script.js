document.addEventListener('DOMContentLoaded', () => {

    const quizData = [
        { 
            question : 'Какого цвета чернокожие?',
            options: ['Белые', 'Черные', 'Зеленые', 'Голубые'],
            correctAnswer: 'Черные'
        },
        { 
            question : 'Какая река самая длинная?',
            options: ['Нил', 'Амазонка', 'Янцзы', 'Миссисипи'],
            correctAnswer: 'Нил'
        },
        { 
            question : 'В каком году началась Вторая мировая война?',
            options: ['1938', '1941', '1940', '1939'],
            correctAnswer: '1939'
        },
    ]

    let currentQuestionIndex = 0
    let score = 0

    const questionTitle = document.getElementById('question-title')
    const optionsContainer = document.getElementById('options-container')
    const nextButton = document.getElementById('next-button')
    const resultContainer = document.getElementById('result-container')
    const scoreText = document.getElementById('score-text')
    const restartButton = document.getElementById('restart-button')

    function loadQuestion() {
        optionsContainer.innerHTML = ''
        nextButton.style.display = 'none'

        const currentQuestion = quizData[currentQuestionIndex]
        questionTitle.textContent = currentQuestion.question

        currentQuestion.options.forEach (optionText => {
            const button = document.createElement('button')
            button.textContent = optionText
            button.classList.add('option-button')

            button.addEventListener('click', () => {
                selectAnswer(button, optionText, currentQuestion.correctAnswer)
            })

            optionsContainer.appendChild(button)
        })    
    }

    function selectAnswer(selectedButton, selectedOption, correctAnswer) {
        const allOptionButtons = optionsContainer.querySelectorAll('.option-button')
        allOptionButtons.forEach(btn => {
            btn.classList.add('disabled')
        })
        if (selectedOption === correctAnswer) {
            selectedButton.classList.add('correct')
            score += 1
        } else {
            selectedButton.classList.add('incorrect')
            allOptionButtons.forEach(btn => {
                if (btn.textContent === correctAnswer) {
                    btn.classList.add('correct')
                }
            })
        }
        nextButton.style.display = 'inline-block'
    }

    loadQuestion()
})
