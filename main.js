function checkAnswers() {
    let score = 0;

    // Verifica as respostas
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === 'A') {
        score++;
    }

    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === 'B') {
        score++;
    }

    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === 'C') {
        score++;
    }

    const q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === 'B') {
        score++;
    }

    const q5 = document.querySelector('input[name="q5"]:checked');
    if (q5 && q5.value === 'B') {
        score++;
    }



    const q6 = document.querySelector('input[name="q6"]:checked');
    if (q6 && q6.value === 'B') {
        score++;
    }

    const q7 = document.querySelector('input[name="q7"]:checked');
    if (q7 && q7.value === 'A') {
        score++;
    }

    const q8 = document.querySelector('input[name="q8"]:checked');
    if (q8 && q8.value === 'B') {
        score++;
    }

    const q9 = document.querySelector('input[name="q9"]:checked');
    if (q9 && q9.value === 'B') {
        score++;
    }

    const q10 = document.querySelector('input[name="q10"]:checked');
    if (q10 && q10.value === 'B') {
        score++;
    }



    const q11 = document.querySelector('input[name="q11"]:checked');
    if (q11 && q11.value === 'B') {
        score++;
    }

    const q12 = document.querySelector('input[name="q12"]:checked');
    if (q12 && q12.value === 'C') {
        score++;
    }

    const q13 = document.querySelector('input[name="q13"]:checked');
    if (q13 && q13.value === 'A') {
        score++;
    }

    const q14 = document.querySelector('input[name="q14"]:checked');
    if (q14 && q14.value === 'B') {
        score++;
    }

    const q15 = document.querySelector('input[name="q15"]:checked');
    if (q15 && q15.value === 'A') {
        score++;
    }

    
    // Exibe o resultado
    const result = document.getElementById('result');
    result.textContent = `Você acertou ${score} de 5 perguntas`;

    // Verifica se o usuário acertou 3 ou mais perguntas
    const nextButtonContainer = document.getElementById('next-button-container');
    if (score >= 3) {
        if (!document.getElementById('next-button')) {
            
            // Cria o botão "Próximo" apenas se ainda não existir
            const nextButton = document.createElement('button');
            nextButton.textContent = 'Próximo';
            nextButton.id = 'next-button';
            nextButton.addEventListener('click', () => {
                
            });
            nextButtonContainer.appendChild(nextButton);
        }
    } else {
        // Remove o botão "Próximo" caso exista e a pontuação seja insuficiente
        const existingButton = document.getElementById('next-button');
        if (existingButton) {
            nextButtonContainer.removeChild(existingButton);
        }
    }
}
