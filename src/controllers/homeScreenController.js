import { renderChartGrid, displayBtn, clearHomeScreen } from '../view/homeScreenView';
import { elements } from "../view/base";

// Render home screen 
export const render = arr => {
    // Render chart grid
    renderChartGrid(arr);

    // Display button
    displayBtn();

    // Clear home screen
    onClick();
};

const onClick = () => {
    elements.btn.addEventListener('click', () => {
        // Clear home screen
        clearHomeScreen();

        // Start practice

    });
};


