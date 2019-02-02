import { elements } from './base';

// Display equation 
export const renderEquation = equation => {
    const markupScore = `
        <div class="score">
            <p id="counter">0</p>
            <p id="face">🙂</p>
        </div>
    `;
    elements.top.insertAdjacentHTML("afterbegin", markupScore);

    const markupEquation = `
        <div class="problem">
            <div class="sum">
                <p>+</p>
            </div>
            <div class="num">
                <p>${equation.charAt(0)}</p>
                <p>${equation.charAt(2)}</p>
                <p id="answer">?</p>
            </div>
        </div>
    `;
    elements.middle.insertAdjacentHTML("afterbegin", markupEquation);
};

// Display score

// Display answer 

// Display mistake

// Display timer

