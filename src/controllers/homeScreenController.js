import { renderChartGrid, displayBtn, operationName, clearHomeScreen } from '../view/homeScreenView';

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


