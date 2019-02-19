import { renderChartGrid, displayBtn, operationName } from '../view/homeScreenView';

// Render home screen 
export const render = arr => {
    // Display header
    const operation = arr[0].operator;
    operationName(operation);

    // Render chart grid
    renderChartGrid(arr);

    // Display button
    displayBtn();
};


