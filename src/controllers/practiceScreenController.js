import * as practiceView from '../view/practiceScreenView';
import PracticeModel from '../models/PracticeModel';

export const startPractice = arr => {
    var timerIdHolder = {};

    // Print new equation passing equations info
    var practiceModel = new PracticeModel(0, chooseEquation(arr), '', 0);

    // Handel keypress 
    window.addEventListener('keypress', async event => {
        if (practiceModel.equation.value.length > practiceModel.input.length) {
            practiceModel.input += event.key;
        };

        if (practiceModel.input.length === practiceModel.equation.value.length) {
            // If an input is full
            if (practiceModel.input === practiceModel.equation.value) {
                // If an input is correct update the equation status with success
                stopTimer(timerIdHolder);

                practiceModel.equation.status = 'success';
                practiceModel.score += 1;
                practiceView.renderEquation(practiceModel);

                await delay(1000);

                practiceModel.input = '';
                practiceModel.seconds = 0;

                practiceModel.equation = chooseEquation(arr);
                practiceView.renderEquation(practiceModel);
                
                timerIdHolder.id = startTimer(practiceModel, timerIdHolder);
            } else if (practiceModel.input != practiceModel.equation.value) {
                stopTimer(timerIdHolder);

                practiceModel.equation.status = 'fail';
                practiceView.renderEquation(practiceModel);
            };
        } else if (practiceModel.input.length < practiceModel.equation.value.length) { // If an input is not full 
            if (!practiceModel.equation.value.startsWith(practiceModel.input)) {
                stopTimer(timerIdHolder);

                practiceModel.equation.status = 'fail';
                practiceView.renderEquation(practiceModel);
            } else {
                // If an input is correct print equation with input
                practiceView.renderEquation(practiceModel);
            }
        }
    });
    practiceView.renderEquation(practiceModel);
    timerIdHolder.id = startTimer(practiceModel, timerIdHolder);
};

var startTimer = (model, timerIdHolder) => {
    return setInterval(updateSeconds, 1000, model, timerIdHolder);
};

var stopTimer = id => {
    clearInterval(id);
};

var updateSeconds = async (model, timerIdHolder) => {
    model.seconds += 1;

    if (model.seconds === 3) {
        stopTimer(timerIdHolder.id);
        model.equation.status = 'fail';
    }

    practiceView.renderEquation(model);
    await delay(3000);
};

const delay = ms => new Promise(res => setTimeout(res, ms));

// Choose random equation
const chooseEquation = arr => {
    return arr[Math.floor(Math.random() * 100)];
};