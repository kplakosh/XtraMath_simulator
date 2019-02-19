import Equation from "../models/Equation"
import * as homeScreenController from './homeScreenController';
import { clearHomeScreen } from '../view/homeScreenView';
import { elements } from "../view/base";
import { startPractice } from './practiceScreenController';

export default function startApplication() {
    // 1. Initialize array of addition equations
    var arrayEquations = [];
    

    // // Addition chard
    // for(let i = 0; i < 10; i ++) {
    //     for(let j = 0; j < 10; j ++) {
    //         // Make sure name of status and name of class in css file is the same
    //         arrayEquations.push(new Equation(`${i}+${j}`, 'notTested', (i+j).toString()));
    //     };
    // };

    // Subtraction chard
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            // Make sure name of status and name of class in css file is the same
            arrayEquations.push(new Equation(`${i+j}-${j}`, 'notTested', [i+j, j], '-', (i+j - j).toString()));
        };
    };

    homeScreenController.render(arrayEquations);

    // 3. Use local storage to keep track of answers 

    // 4. Listen for button click to start practice
    handleClick(arrayEquations);
};

// Clear home screen from success chart and button itself
const handleClick = arr => {
    elements.btn.addEventListener('click', () => {
        clearHomeScreen();
        startPractice(arr, onPracticeFinished);
    });
};

const onPracticeFinished = arr => {
    homeScreenController.render(arr);
};
