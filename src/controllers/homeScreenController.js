import { renderChartGrid, displayBtn, operationName } from '../view/homeScreenView';
import { elements } from '../view/base';

// Render home screen 
export const render = arr => {
    // Display header
    const operation = arr[0].name.charAt(1);
    operationName(operation);

    // Render chart grid
    renderChartGrid(arr);

    // Display button
    displayBtn();
};


