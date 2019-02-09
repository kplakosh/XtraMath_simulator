import * as practiceView from '../view/practiceScreenView';
import { elements } from '../view/base';
import PracticeModel from '../models/PracticeModel';

var equationObj;

export const startPractice = arr => {
    let score = 0;

    // 1. Choose an equation to print
    equationObj = chooseEquation(arr);

    // 2. Create new model passing equations info
    const equation = new PracticeModel(score, equationObj.name, equationObj.value, '', 0);

    // 3. Print equation
    practiceView.renderEquation(equation);

    // 4. Listen for keypress 
    let enteredValue = [];
    window.addEventListener('keypress', event => {
        // Clear screen from data
        practiceView.clearMiddle();

        // Print equation and input
        if (equation.value.toString().length > enteredValue.length) {
            enteredValue.push(event.key);
        };

        // Check if the entered answer is correct
        if (checkAnswer(enteredValue.join('')) === true) {
            score += 1;
            // Generate new equation
        
            // Reset input value
            
            // Reset timer
        } else {
            score = 0;
        };

        practiceView.renderEquation(new PracticeModel(score, equationObj.name, equationObj.value, enteredValue.join(''), 2));
    });

    // 5. Check if entered value is equal to correct answer

    // 6. Update Equation object with answer 
};

// Choose random equation from array
const chooseEquation = arr => {
    return arr[Math.floor(Math.random() * 100)];
};

// Check if the input is full and 
const checkAnswer = arr => {
    let answer;
    // Check is input has the same amount of characters as chosen equations value
    if (equationObj.value.toString().length < arr.length || equationObj.value.toString().length > arr.length) {
        // If input array has less or more characters than correct answer return false
        answer = false;
    } else if (equationObj.value.toString().length === arr.length && equationObj.value === parseInt(arr)) {
        // If input array has same amount of characters as correct answer, and it's correct answer return true
        answer = true;
    };
    return answer;
};
