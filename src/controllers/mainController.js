import Equation from "../models/Equation"
import * as homeScreenController from './homeScreenController';

export default function startApplication() {
    // 1. Initialize array of addition equations
    var additionEquationsArray = [];
    
    // 2. Fill out equations array with default values for addition
    for(let i = 0; i < 10; i ++) {
        for(let j = 0; j < 10; j ++) {
            // Make sure name of status and name of class in css file is the same
            additionEquationsArray.push(new Equation(`${i}+${j}`, 'notTested'))
            
        };
    };

    homeScreenController.render(additionEquationsArray);
    console.log(additionEquationsArray);

    // 3. Use local storage to keep track of answers 

};


export var chardController = {
    // 1. Display the chard of progress

    // 2. Check the value of equation to assign color of background 

    // 3. Display color of background for the sell of equation. Gray - not tested, yellow - need improvement, red - fail, green - master

};

export var quizController = {
    // 1. Show success chart

    // 2. Read the button press to start test

    // 3. Hide success chart 

    // 4. Show test 

    // 5. Start test

    // 6. Reset score

    // 7. Display new random equation
    // equationController();

    // 8. Set timer for 3 sec

    // 9. If timer less than 3 seconds 

        // 1. Read answer from user

        // 2. Check if the answer is correct

        // 3. Update value of equation object

        // 4. Update the score

    // 12. If timer 3 sec or more

};