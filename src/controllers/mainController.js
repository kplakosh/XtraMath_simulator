import Equation from "../models/Equation"
import * as homeScreenController from './homeScreenController';
import { clearHomeScreen } from '../view/homeScreenView';
import { elements } from "../view/base";
import { startPractice } from './practiceScreenController';

export default function startApplication() {
    // 1. Initialize array of addition equations
    var additionEquationsArray = [];
    
    // 2. Fill out equations array with default values for addition
    for(let i = 0; i < 10; i ++) {
        for(let j = 0; j < 10; j ++) {
            // Make sure name of status and name of class in css file is the same
            additionEquationsArray.push(new Equation(`${i}+${j}`, 'notTested', (i+j).toString()));
        };
    };

    homeScreenController.render(additionEquationsArray);

    // 3. Use local storage to keep track of answers 

    // 4. Listen for button click to start practice
    handleClick(additionEquationsArray);

};

// Clear home screen from success chart and button itself
const handleClick = arr => {
    elements.btn.addEventListener('click', () => {
        clearHomeScreen();
        startPractice(arr);
    });
};
