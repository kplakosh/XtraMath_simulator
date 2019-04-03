import Equation from "../models/Equation"
import { renderChartGrid, displayBtn, clearHomeScreen, displayHomeScreen } from '../view/homeScreenView';
import { elements } from "../view/base";
import { startPractice } from './practiceScreenController';

// Render home screen 
const render = arr => {
    // Render chart grid
    renderChartGrid(arr);

    // Display button
    displayBtn();
};

export default function startApplication() {
    // Read operation name
    var select = document.querySelector('#operation-name');
    var operation = select.options[select.selectedIndex].value;

    // Read value from local storage
    var arrayEquations = readStorage(operation);

    var select = document.querySelector('#operation-name');

    // Check if localStorage contain any data
    if (arrayEquations === undefined) {
        arrayEquations = [];
        // Create new array of Equation objects to display in chart
        if (operation === 'addition') {
            // Addition chart
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    // Make sure name of status and name of class in css file has same name
                    arrayEquations.push(new Equation(`${i}+${j}`, 'notTested', (i + j).toString()));
                };
            };
        } else if (operation === 'subtraction') {
            // Subtraction chart
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    // Make sure name of status and name of class in css file has same name
                    arrayEquations.push(new Equation(`${i + j}-${j}`, 'notTested', [i + j, j], '-', (i + j - j).toString()));
                };
            };
        } else if (operation === 'multiplication') {
            // Multiplication chard
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    arrayEquations.push(new Equation(`${i}*${j}`, 'notTested', [i, j], '*', (i*j).toString()));
                }
            }
        } 
    }

    render(arrayEquations);

    // // Choose operation
    // handelSelect(document.querySelector('#operation-name'));

    // Listen for button click to start practice
    handleClick(arrayEquations);
};

// const handelSelect = element => {
//     element.addEventListener('select', () => {
        
//     });
// }

// Clear home screen from success chart and button itself
const handleClick = arr => {
    elements.btn.addEventListener('click', () => {
        clearHomeScreen();
        startPractice(arr, onPracticeFinished);
    });
};

const onPracticeFinished = arr => {
    render(arr);
    displayHomeScreen();
    persistData(arr);
};

const persistData = arr => {
    var operationName = '';
    if (arr.operation === '+') {
        operationName = 'addition';
    } else if (arr.operation === '-') {
        operationName = 'subtraction';
    } else if (arr.operation === '*') {
        operationName = 'multiplication';
    } else if (arr.operation === '÷') {
        operationName = 'division';
    }
    localStorage.setItem((operationName).toString(), JSON.stringify(arr));
}

const readStorage = (operationName) => {
    const storage = JSON.parse(localStorage.getItem((operationName).toString()));

    if (storage) return storage;
}