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
        arr: arr
    };

    var keyPressHandler = async event => {
        if (practiceModel.equation.value.length > practiceModel.input.length) {
            practiceModel.input += event.key;
        };

        if (practiceModel.input.length === practiceModel.equation.value.length) {
            // If an input is full
            if (practiceModel.input === practiceModel.equation.value) {
                // If an input is correct update the equation status with success
                stopTimer(timerIdHolder.id);

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
                practiceFinished(parameters);
            };
        } else if (practiceModel.input.length < practiceModel.equation.value.length) { // If an input is not full 
            if (!practiceModel.equation.value.startsWith(practiceModel.input)) {
                practiceFinished(parameters);
            } else {
                // If an input is correct then print equation with input
                practiceView.renderEquation(practiceModel);
            }
        }
    };

    parameters.keyPressHandler = keyPressHandler;

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

var updateSeconds = parameters => {
    parameters.practiceModel.seconds += 1;
    practiceView.renderEquation(parameters.practiceModel);

    if (parameters.practiceModel.seconds === 3) {
        practiceFinished(parameters);
    }
};

const practiceFinished = async (parameters) => {
    stopTimer(parameters.timerIdHolder.id);
    window.removeEventListener('keypress', parameters.keyPressHandler);

    parameters.practiceModel.equation.status = 'fail';
    practiceView.renderEquation(parameters.practiceModel);

    await delay(3000);

    practiceView.clearMiddle();
    parameters.onPracticeFinished(parameters.arr);
}

const delay = ms => new Promise(res => setTimeout(res, ms));

// Choose random equation
const chooseEquation = arr => {
    return arr[Math.floor(Math.random() * 100)];
};