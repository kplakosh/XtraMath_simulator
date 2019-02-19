import Equation from "../models/Equation"
import * as homeScreenController from './homeScreenController';
import { clearHomeScreen, displayHomeScreen } from '../view/homeScreenView';
import { elements } from "../view/base";
import { startPractice } from './practiceScreenController';

export default function startApplication() {
    // Initialize array of addition equations
    var arrayEquations = [];
    
    // Choose operation
    var operationSelector = elements.operationSelector;
    var operation = operationSelector.options[operationSelector.selectedIndex].value;
    
    // Read value from local storage
    arrayEquations = readStorage();

    // Check if localStorage contain any data
    if (arrayEquations === 'undefined') { 
        // Create new array of Equation objects to display in chart
        if (operation === 'addition') {
            // Addition chart
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    // Make sure name of status and name of class in css file is the same
                    arrayEquations.push(new Equation(`${i}+${j}`, 'notTested', (i + j).toString()));
                };
            };
        } else if (operation === 'subtraction') {
            // Subtraction chart
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    // Make sure name of status and name of class in css file is the same
                    arrayEquations.push(new Equation(`${i + j}-${j}`, 'notTested', [i + j, j], '-', (i + j - j).toString()));
                };
            };
        }
    }

    homeScreenController.render(arrayEquations);

    // Listen for button click to start practice
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
    displayHomeScreen();
    persistData(arr);
};

const persistData = arr => {
    localStorage.setItem('results', JSON.stringify(arr));
}

const readStorage = () => {
    const storage = JSON.parse(localStorage.getItem('results'));

    if (storage) return storage;
}
