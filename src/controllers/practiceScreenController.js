import * as practiceView from '../view/practiceScreenView';
import PracticeModel from '../models/PracticeModel';

export const startPractice = arr => {
    // Print new equation passing equations info
    var practiceModel = new PracticeModel(0, arr[Math.floor(Math.random() * 100)], '', 0);

    // Handel keypress 
    window.addEventListener('keypress', event => {
        practiceView.clearMiddle();
    
        // Add key press to an array
        if (practiceModel.equation.value.length > practiceModel.input.length) {
            practiceModel.input += event.key;
        };

        if (practiceModel.input.length === practiceModel.equation.value.length) {
            // If an input is full
            if (practiceModel.input === practiceModel.equation.value) {
                // If an input is correct update the equation status with success
                practiceModel.equation.status = 'success';

                // Update score
                practiceModel.score += 1;

                // Render equation including input
                practiceView.renderEquation(practiceModel);

                // Reset input
                practiceModel.input = '';

                // Reset timer
                practiceModel.seconds = 0;

                // Go to next equation
                practiceModel.equation = arr[Math.floor(Math.random() * 100)];

                // Print equation with input
                practiceView.renderEquation(practiceModel);
                
            } else if (practiceModel.input != practiceModel.equation.value) {
                // Update equation status with fail
                practiceModel.equation.status = 'fail';

                // If an input is not correct go to the main page
                practiceView.clearMiddle();
            };
        } else if (practiceModel.input.length < practiceModel.equation.value.length) {
            // If an input is not full 
            if (practiceModel.input != practiceModel.equation.value) {
                // If an input is not correct go to the main page
                practiceView.clearMiddle();
                practiceView.renderEquation(practiceModel);
            } else if (practiceModel.input === practiceModel.equation.value) {
                // If an input is correct print equation with input
                practiceView.renderEquation(practiceModel);
            };
        };
    });
    // Print equation
    practiceView.renderEquation(practiceModel);
};