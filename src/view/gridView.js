import { elements } from './base';

// Clear middle part of main section from grid
export const clearSuccessChart = () => {
    elements.middle.innerHTML = '';
};

// Create one equation
const createEquation = equation => `
    <li>${equation.name}</li>
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
    <ul class="row colorful">
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