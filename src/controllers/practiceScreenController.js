import * as practiceView from '../view/practiceScreenView';
import PracticeModel from '../models/PracticeModel';

export const startPractice = arr => {
    // Print new equation passing equations info
    var practiceModel = new PracticeModel(0, chooseEquation(arr), '', 0);

    // Handel keypress 
    window.addEventListener('keypress', async event => {
        practiceView.clearMiddle();
    
        if (practiceModel.equation.value.length > practiceModel.input.length) {
            practiceModel.input += event.key;
        };

        if (practiceModel.input.length === practiceModel.equation.value.length) {
            // If an input is full
            if (practiceModel.input === practiceModel.equation.value) {
                // If an input is correct update the equation status with success
                practiceModel.equation.status = 'success';
                practiceModel.score += 1;
                practiceView.renderEquation(practiceModel);

                await delay(1000);

                practiceModel.input = '';
                practiceModel.seconds = 0;

                practiceModel.equation = chooseEquation(arr);
                practiceView.renderEquation(practiceModel);
                
            } else if (practiceModel.input != practiceModel.equation.value) {
                practiceModel.equation.status = 'fail';
                practiceView.clearMiddle();
            };
        } else if (practiceModel.input.length < practiceModel.equation.value.length) {
            // If an input is not full 
            if (practiceModel.input != practiceModel.equation.value) {
                practiceView.clearMiddle();
                practiceView.renderEquation(practiceModel);
            } else if (practiceModel.input === practiceModel.equation.value) {
                // If an input is correct print equation with input
                practiceView.renderEquation(practiceModel);
            };
        };
    });
    practiceView.renderEquation(practiceModel);
};

const delay = ms => new Promise(res => setTimeout(res, ms));

// Choose random equation
const chooseEquation = arr => {
    return arr[Math.floor(Math.random() * 100)];
};