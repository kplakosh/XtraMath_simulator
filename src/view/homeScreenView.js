import { elements } from './base';

// Clear middle part of main section from grid
export const clearHomeScreen = () => {
    elements.middle.innerHTML = '';
    elements.btn.style = "display: none;";
    elements.testName.style = "display: none;";
};

export const displayHomeScreen = () => {
    // elements.middle.innerHTML = '';
    elements.top.insertAdjacentHTML("afterbegin", printHeader);
    
    elements.btn.style = "display: block;";
    document.querySelector("button").focus();
}

// Render header of chart
const printHeader = `
    <div class="test-name">
        <H1>Placement Quiz</H1>
        <select id="operation-name">
            <option value="addition">Addition</option>
            <option value="subtraction" selected="selected">Subtraction</option>
            <option value="multiplication">Multiplication</option>
            <option value="division">Division</option>
        </select>
    </div>
`;

// Create one equation make sure status name and name of class in css file same
const createEquation = equation => `
    <li class="${equation.status}">${equation.name}</li> 
`;

// Create line of addition equations
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
};

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
    elements.middle.insertAdjacentHTML("afterBegin", markup);
};

// Display button in the bottom section
export const displayBtn = () => {
    elements.btn.className = "";
    document.querySelector("button").focus();
};

