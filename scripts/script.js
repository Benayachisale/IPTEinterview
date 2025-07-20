//import questions from './interview_questions.js';

document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const level = parseInt(localStorage.getItem("level")) || 0;

    if (!user) {
        window.location.href = 'form.html';
    }

    if (user) {
        document.getElementById('user-info').innerHTML = `
            Welcome, ${user.name} (IPTE ${user.ipte}, ${user.district})
        `;
        
        let currentQuestionIndex = parseInt(localStorage.getItem("level")) || 0;
        const questionElement = document.getElementById('question');
        const optionsElement = document.getElementById('options');
        const feedbackElement = document.getElementById('feedback');
        const nextButton = document.getElementById('next-btn');

        // Fisher-Yates shuffle algorithm
        function shuffleArray(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }

        function loadQuestion() {
            const q = questions[currentQuestionIndex];
            // Create a copy of the options and shuffle them
            const optionsCopy = [...q.options];
            const shuffledOptions = shuffleArray(optionsCopy);
            // Find the new index of the correct answer
            const correctIndex = shuffledOptions.indexOf(q.options[q.correct]);
            
            questionElement.textContent = q.question;
			document.getElementById("genre").textContent=q.genre;
						document.getElementById("prog").textContent=`question ${currentQuestionIndex} of ${questions.length} `;

            optionsElement.innerHTML = '';
            shuffledOptions.forEach((option, index) => {
                const button = document.createElement('button');
                button.classList.add('btn', 'btn-outline-primary', 'text-start', 'option');
                button.innerHTML = `<i class="bi bi-circle me-2"></i>${option}`;
                button.addEventListener('click', () => selectOption(index, correctIndex));
                optionsElement.appendChild(button);
            });
            feedbackElement.innerHTML = '';
            feedbackElement.className = 'mt-3';
            nextButton.disabled = true;
        }

        function selectOption(selectedIndex, correctIndex) {
            const q = questions[currentQuestionIndex];
            const options = optionsElement.children;
            const shuffledOptions = Array.from(options).map(btn => btn.textContent.replace(/<i[^>]*><\/i>/, '').trim());
            
            for (let i = 0; i < options.length; i++) {
                options[i].classList.remove('btn-primary', 'btn-outline-primary');
                options[i].classList.add('btn-outline-primary');
                options[i].innerHTML = `<i class="bi bi-circle me-2"></i>${shuffledOptions[i]}`;
            }
            options[selectedIndex].classList.remove('btn-outline-primary');
            options[selectedIndex].classList.add('btn-primary');
            options[selectedIndex].innerHTML = `<i class="bi bi-check-circle-fill me-2"></i>${shuffledOptions[selectedIndex]}`;
            
            if (selectedIndex === correctIndex) {
                feedbackElement.innerHTML = 'Correct!';
                feedbackElement.className = 'mt-3 alert alert-success';
            } else {
                feedbackElement.innerHTML = `Incorrect. The correct answer is: ${q.options[q.correct]}`;
                feedbackElement.className = 'mt-3 alert alert-danger';
            }
            nextButton.disabled = false;
        }

        nextButton.addEventListener('click', () => {
            currentQuestionIndex++;
            localStorage.setItem("level", currentQuestionIndex);
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
            } else {
                questionElement.textContent = 'Quiz Completed!';
                optionsElement.innerHTML = '';
                feedbackElement.innerHTML = '';
                nextButton.classList.add('d-none');
            }
        });

        loadQuestion();
    }
});