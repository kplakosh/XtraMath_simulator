import { renderEquation, printAnswer } from '../view/practiceScreenView';
import { elements } from '../view/base';

export const startPractice = arr => {
    var equation = chooseEquation(arr);

    // 1. Print equation
    renderEquation(equation.name);

    // 2. Listen for keypress 
    let enteredValue;
    window.addEventListener('keypress', event => {
        enteredValue = event.key;
        printAnswer(enteredValue);
    });
    

    // 3. Print value of pressed key

    // 4. Check if entered value is equal to correct answer

        // 1. If answer correct add score

        // 2. If answer is not correct clear score and go to home screen

};

// Choose random equation from array
const chooseEquation = arr => {
    return arr[Math.floor(Math.random() * 100)];
};




