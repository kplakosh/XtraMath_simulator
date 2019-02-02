import { elements } from './base';

// Clear middle part of main section from grid
export const clearHomeScreen = () => {
    elements.middle.innerHTML = '';
    elements.btn.style = "display: none;";
    elements.testName.style = "display: none;";
};

// Display name of operation in DOM
export const operationName = char => {
    if (char === '+') {
        elements.operation.innerHTML = 'Addition';
    } else if (char === '-') {
        elements.operation.innerHTML = 'Subtraction';
    } else if (char === 'x') {
        elements.operation.innerHTML = 'Multiplication';
    } else if (char === '÷') {
        elements.operation.innerHTML = 'Division';
    };
};

// Create one equation make sure status name and name of class in css file same
const createEquation = equation => `
    <li class="${equation.status}">${equation.name}</li> 
`;

// Create line of equations
const createEquationLine = (arr, lineNum) => {
    let num = parseInt(`${lineNum}0`);
    let lastNum = num + 10;
    var liLine = [];
    while (num < lastNum) {
        liLine.push(createEquation(arr[num]));
        num += 1;
    }
    return liLine.join('');
}

// Create line of grid
const createLine = (equationArray, lineNum) => `
    <ul class="row">
        <li></li>
        ${createEquationLine(equationArray, lineNum)}
        <li></li>
    </ul>
`;

// Create 10 lines of grid
const createGrid = array => {
    let grid = [];
    for (let i = 0; i <= 9; i ++) {
        grid.push(createLine(array, i));
    }
    return grid.join('');
}

// Create full grid
export const renderChartGrid = array => {
    const markup = `
        <div class="grid">
            <div class="plain_grid">
                <ul class="row">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                ${createGrid(array)}
                <ul class="row">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    `;
    elements.middle.insertAdjacentHTML("afterbegin", markup);
};



// Display button in the bottom section
export const displayBtn = () => {
    if (elements.btn.style === "none") {
        elements.btn.style = 'block';
    };
};

