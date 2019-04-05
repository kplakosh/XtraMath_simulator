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
    var operation = readOperationName();

    if (operation === null) {
        operation = 'multiplication';
        persistOperation(operation);
    };

    displayHomeScreen(operation);

    var arrayEquations = initModelForOperation(operation);

    render(arrayEquations);
    
    initSelectHandler();

    // Listen for button click to start practice
    handleClick(arrayEquations);
};

const initSelectHandler = () => {
    var select = document.querySelector('#operation-name');
    select.addEventListener('change', function (event) {
        var operation = select.value;
        persistOperation(operation);

        var arrayEquations = initModelForOperation(operation);
        render(arrayEquations);
        handleClick(arrayEquations);
    });
}

var initModelForOperation = operation => {
    // Read value from local storage
    var arrayEquations = readStorage(operation);

    // Check if localStorage contain any data
    if (arrayEquations === undefined) {
        arrayEquations = [];
        // Create new array of Equation objects to display in chart
        if (operation === 'addition') {
            // Addition chart
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    // Make sure name of status and name of class in css file has same name
                    arrayEquations.push(new Equation(`${i}+${j}`, 'notTested', [i, j], '+', (i + j).toString()));
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
                    arrayEquations.push(new Equation(`${i}*${j}`, 'notTested', [i, j], '*', (i * j).toString()));
                }
            }
        } else if (operation === 'division') {
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    if (j === 0) {
                        arrayEquations.push(new Equation(``, 'doNotDisplay', [], '÷', ''));
                    } else {
                        arrayEquations.push(new Equation(`${i * j}÷${j}`, 'notTested', [i * j, j], '÷', (i * j / j).toString()));
                    }
                }
            }

        }
    }
    return arrayEquations;
};

// Clear home screen from success chart and button itself
const handleClick = arr => {
    elements.btn.addEventListener('click', () => {
        clearHomeScreen();
        startPractice(arr, onPracticeFinished);
    });
};

const onPracticeFinished = arr => {
    render(arr);
    displayHomeScreen(readOperationName());
    initSelectHandler();
    persistData(arr);
};

const persistData = arr => {
    var operationName = '';
    if (arr[0].operator === '+') {
        operationName = 'addition';
    } else if (arr[0].operator === '-') {
        operationName = 'subtraction';
    } else if (arr[0].operator === '*') {
        operationName = 'multiplication';
    } else if (arr[0].operator === '÷') {
        operationName = 'division';
    }
    localStorage.setItem((operationName).toString(), JSON.stringify(arr));
}

const persistOperation = name => {
    localStorage.setItem('selectedOperationName', name);
}

const readStorage = operationName => {
    const storage = JSON.parse(localStorage.getItem((operationName).toString()));

    if (storage) return storage;
}

const readOperationName = () => {
    return localStorage.getItem('selectedOperationName')
}