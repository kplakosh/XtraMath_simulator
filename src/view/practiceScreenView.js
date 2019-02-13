import { elements } from './base';

// Add score
const displayScore = score => {
    const markupScore = `
        <div class="score">
            <p id="counter">${score}</p>
            <p id="face">🙂</p>
        </div>
    `;
    elements.top.innerHTML = markupScore;
};

// Clear middle
export const clearMiddle = () => {
    elements.middle.innerHTML = '';
};

// Display counted timer
const displayTimerRed = seconds => {
    var num = 0;
    // Print red dots
    const markup = [];
    while (num < seconds) {
        markup.push(`
            <p class="red"> </p>
        `);
        num++;
    };
    return markup.join('');
};

// Display timer
const displayTimer = seconds => {
    var num = seconds;
    // Print grey dots 
    const markup = [];
    while (num < 10) {
        markup.push(`
            <p> </p>
        `);
        num++;
    };
    return markup.join('');
};

// Display practice screen
export const renderEquation = model => {
    clearMiddle();
    displayScore(model.score);

    // Display equation 
    const markup = `
        <div class="problem">
            <div class="sum">
                <p>+</p>
            </div>
            <div class="num">
                <p>${model.equation.name.charAt(0)}</p>
                <p>${model.equation.name.charAt(2)}</p>
            </div>
        </div>
        <div class="answer"> 
            <p class="${(model.equation.status === 'fail' ? "hint" : "correct-answer")}">${(model.equation.status === 'fail' ? model.equation.value : model.input)}</p>
            <p class="${(model.equation.status === 'fail' ? "mistake" : "")}">${(model.equation.status === 'fail' ? model.input : "")}</p>
        </div>
        <div class="timer">
            ${displayTimerRed(model.seconds)}
            ${displayTimer(model.seconds)}
        </div>
    `;
    elements.middle.innerHTML = markup;

    

    // displayTimerRed(model.redTimer);

    // displayTimer(model.greyTimer);
};

// Display answer 




