import { renderEquation } from '../view/practiceScreenView';


export const startPractice = arr => {
    // 1. Print equation
    renderEquation(chooseEquation(arr).name);

    // 2. Start timer

    // 3. Await for any key to be pressed
        // Get the answer with event listener

    // 4. If key wasn't pressed after 3 seconds
        // if(timer > 3 && pressedKey === false)

            // Call isCorrectAnswer

            // 

    // 5. If key was pressed before 3 seconds
        // if(timer < 3 && pressedKey === true)

    // 6. Check if the isCorrectAnswer
};

// Choose random equation from array
const chooseEquation = arr => {
    return arr[Math.floor(Math.random() * 100)];
};

