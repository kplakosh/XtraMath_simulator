import { elements } from './base';


// Add score
export const displayScore = score => {
    const markupScore = `
        <div class="score">
            <p id="counter">${score}</p>
            <p id="face">🙂</p>
        </div>
    `;
    elements.top.insertAdjacentHTML("afterbegin", markupScore);
};

// Clear middle
export const clearMiddle = () => {
    elements.middle.innerHTML = '';
};

// Display practice screen
export const renderEquation = model => {
    // Display equation 
    const markupEquation = `
        <div class="problem">
            <div class="sum">
                <p>+</p>
            </div>
            <div class="num">
                <p>${model.name.charAt(0)}</p>
                <p>${model.name.charAt(2)}</p>
            </div>
        </div>
    `;
    elements.middle.insertAdjacentHTML("afterbegin", markupEquation);

    const markupAnswer = `
        <p id="answer">${model.input}</p>
    `;
    elements.middle.insertAdjacentHTML("beforeend", markupAnswer);
};

// Display answer 

// Display mistake

// Display timer


