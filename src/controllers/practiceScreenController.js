import * as practiceView from '../view/practiceScreenView';
import { elements } from '../view/base';
import PracticeModel from '../models/PracticeModel';


export const startPractice = arr => {
    // Choose an equation to print
    var equationObj = chooseEquation(arr);

    // Create new model passing equations info
    const equation = new PracticeModel(0, equationObj.name, equationObj.value, '', 0);

    // 1. Print equation
    practiceView.renderEquation(equation);


    // 2. Listen for keypress 
    let enteredValue = [];
    window.addEventListener('keypress', event => {
        // Clear screen from data
        practiceView.clearMiddle();

        // Print equation and input

        if (equation.value.toString().length > enteredValue.length) {
            enteredValue.push(event.key);
        }
        practiceView.renderEquation(new PracticeModel(5, equationObj.name, equationObj.value, enteredValue.join(''), 2));

        // console.log(`correct ${equation.value}`);


    });

    // var score = 0;
    // // 4. Check if entered value is equal to correct answer

    // if (isCorrectAnswer(enteredValue) === true) {
    //     // 1. If answer correct add score
    //     score += 1;
    //     practiceView.displayScore(score);
    // } else {
    //     // 2. If answer is not correct clear score and go to home screen
    //     score = 0;
    //     practiceView.displayScore(score);
    // }

};

// Choose random equation from array
const chooseEquation = arr => {
    return arr[Math.floor(Math.random() * 100)];
};

const isCorrectAnswer = arr => {
    return parseInt(arr.join('')) === elements.value ? true : false;
};

const timer = counter => {
    counter ++;
};



