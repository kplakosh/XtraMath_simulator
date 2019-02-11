import * as practiceView from '../view/practiceScreenView';
import PracticeModel from '../models/PracticeModel';
// import equation from '../controllers/equationController';

var model = {
    score: 0, // Current score
    timer: 0, // Time on timer
    equationObj: '', // Equation object to print
    equation: '', // Equation to print
    input: [], // Array of inputs
    practiceModel: '', // Model to print
    value: ''
};

export const startPractice = arr => {
    // Choose an equation to print
    model.equationObj = chooseEquation(arr);
    model.equation = model.equationObj.name;
    model.value = model.equationObj.value;

    // Create new model passing equations info
    model.practiceModel = new PracticeModel(model.score, model.equation, model.value, model.input.join(''), model.timer);

    // Handel keypress 
    window.addEventListener('keypress', event => {
        practiceView.clearMiddle();

        console.log(event.key);
        console.log(addKey(event.key));
        addKey(event.key);
        console.log(model.practiceModel);
        practiceView.renderEquation(model.practiceModel);
        if (isFullCorrectInput() === true) {

            console.log(model.practiceModel);
            // 1. Update score
            let next = nextEquation(chooseEquation(arr));
            console.log(next);
        } else {
            // 2. Update Equation object value with fail
            updateStatus('fail');
        };
    });
    // Print equation
    practiceView.renderEquation(model.practiceModel);
};

// Choose random equation from array
const chooseEquation = arr => {
    return arr[Math.floor(Math.random() * 100)];
};

// When correct answer
const nextEquation = () => {
    model.score += 1;
    updateStatus('success');
    model.input = [];
    model.timer = 0;
    practiceView.renderEquation(model.practiceModel);
};

// Add key press to an array
const addKey = key => {
    if (model.value.toString().length > model.input.length) {
        model.input.push(key);
    };
};

// Update status of equation object
const updateStatus = str => {
    model.equationObj.status = str;
};

// Check if the input is full length and the answer correct
const isFullCorrectInput = () => {
    model.valueLength = model.value.toString().length;

    // Check is input has the same amount of characters as chosen equations value
    if (model.valueLength < model.input.length || 
        model.valueLength > model.input.length) {
        // If input array has less or more characters than correct answer return false
        return false;
    } else if (model.valueLength === model.input.length && 
        model.value === parseInt(model.input.join(''))) {
        // If input array has same amount of characters as correct answer, and it's correct answer return true
        return true;
    };
};
