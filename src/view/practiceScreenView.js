import { elements } from './base';

// Display practice screen
export const renderEquation = equation => {
    // Display score
    const markupScore = `
        <div class="score">
            <p id="counter">0</p>
            <p id="face">🙂</p>
        </div>
    `;
    elements.top.insertAdjacentHTML("afterbegin", markupScore);

    // Display equation 
    const markupEquation = `
        <div class="problem">
            <div class="sum">
                <p>+</p>
            </div>
            <div class="num">
                <p>${equation.charAt(0)}</p>
                <p>${equation.charAt(2)}</p>
            </div>
        </div>
    `;
    elements.middle.insertAdjacentHTML("afterbegin", markupEquation);
};
    
export const printAnswer = key => {
    const markupAnswer = `
        <p id="answer">${key}</p>
    `;
    elements.middle.insertAdjacentHTML("beforeend", markupAnswer);
}

// Display answer 

// Display mistake

// Display timer

