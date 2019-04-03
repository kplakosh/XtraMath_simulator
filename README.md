# XtraMath simulator



## Introduction

XtraMath simulator is a web application which helps a user to master basic skills in solving simple math facts such as addition, subtraction, multiplication, and division. XtraMath simulator challenges a person's mathematical skills against clock. 

- The user chooses what type of math operations they will face: addition, subtraction, multiplication or division.
- The user will be given 3 seconds to answer each math fact.
- The timer will start highlighting red lights in the timeline each second.
- After 3 seconds if there is no answer entered the application will give hint in gray color and wait for the input for 3 more seconds but no additional red light on timeline. 
- If there is entered value under 3 seconds and the value is correct user will continue mastering skills until a mistake is made.
- If the entered value is incorrect the program will stop counter and show your input crossed and in red color. Also, it will show the user the hint in gray and will wait for input for 3 more seconds. 
- The quiz will automatically stop it's execution after 6 seconds total in case of no input under 3 seconds or incorrect answer.
- After each time user takes the quiz the results are stored/updated in the local storage for comfortable tracking of users progress. 
- Original idea: <a href="https://xtramath.org/#/home/index">XtraMath</a>

## Requirements

- Install Node.js (see https://nodejs.org/en/)
- This project requires npm installation (see https://www.npmjs.com/get-npm). Require npm version 6.7.0 or higher.

## Getting Started

To start mastering skills on your computer you need to download the copy of the project and install npm. 

Step 1. Download/cone <a href="https://github.com/kplakosh/XtraMath_simulator.git"> project file</a>.
```
git clone https://github.com/kplakosh/XtraMath_simulator.git
```

Step 2. Install dependencies.
```
npm install
```

Step 3. To start the program in a terminal run: 
```
npm run start
```
This command will load the script which starts the program. The script will open a new tab in the browser with the progress chart.

Step 4. To stop the execution of the program user needs to press a combination of control+C in the terminal.