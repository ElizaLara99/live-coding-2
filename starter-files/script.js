// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 */
//creando funcion fetchAnswer
async function fetchAnswer() {
    const input = document.getElementById('input');
    const answerDiv = document.getElementById('answer');
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = '';

    if (input.value.trim() === '') {
        errorDiv.textContent = 'Haz una pregunta.';
        return;
    }