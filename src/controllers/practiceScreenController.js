import * as practiceView from '../view/practiceScreenView';
import PracticeModel from '../models/PracticeModel';

export const startPractice = (arr, onPracticeFinished) => {
    var timerIdHolder = {};

    // Print new equation passing equations info
    var practiceModel = new PracticeModel(0, chooseEquation(arr), '', 0);

    var parameters = {
        practiceModel: practiceModel,
        timerIdHolder: timerIdHolder,
        onPracticeFinished: onPracticeFinished,
        arr: arr,
        keyPressHandler: keyPressHandler
    };

    var keyPressHandler = async event => {
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

                timerIdHolder.id = startTimer(parameters);
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
    };

    // Handel keypress 
    window.addEventListener('keypress', keyPressHandler);
    practiceView.renderEquation(practiceModel);
    timerIdHolder.id = startTimer(parameters);
};

var startTimer = (parameters) => {
    return setInterval(updateSeconds, 1000, parameters);
};

var stopTimer = id => {
    clearInterval(id);
};

var updateSeconds = async (parameters) => {
    parameters.practiceModel.seconds += 1;
    practiceView.renderEquation(parameters.practiceModel);

    if (parameters.practiceModel.seconds === 3) {
        stopTimer(parameters.timerIdHolder.id);
        parameters.practiceModel.equation.status = 'fail';
        practiceView.renderEquation(parameters.practiceModel);
        window.removeEventListener('keypress', parameters.keyPressHandler);

        await delay(3000);

        practiceView.clearMiddle();
        parameters.onPracticeFinished(parameters.arr);
    }
};

const delay = ms => new Promise(res => setTimeout(res, ms));

// Choose random equation
const chooseEquation = arr => {
    return arr[Math.floor(Math.random() * 100)];
};