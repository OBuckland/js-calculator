const display = document.querySelector("#display");
const numberBtns = document.querySelectorAll(".number-btn");
const equationBtns = document.querySelectorAll(".equation-btn")
const allBtns = document.querySelectorAll("button")
const clearBtn = document.querySelector("#clear")
const percentBtn = document.getElementById("percent")
const equalsBtn = document.getElementById("equals")
const mathFunction = document.querySelectorAll(".math-function")
let currentCharacter = "";
const inputLengthCheck = () => {
    if (display.innerHTML.length<15) {
        inputLengthWithinLimit = true;
    } else {
        inputLengthWithinLimit = false;
    }
}





// SHOW UP SELCTED NUMBER BUTTON ON DISPLAY AND CHARACTER LIMIT TO 15
numberBtns.forEach(button => {
    button.addEventListener(("click"), (event) => {
        inputLengthCheck();
        if (inputLengthWithinLimit === true) {
            currentCharacter = event.target.innerHTML;
            display.innerHTML += currentCharacter;
        }
    })
}); 

//EQUATION BUTTONS

const operators = ["+", "-", "*", "/"]


equationBtns.forEach(button => {
   button.addEventListener(("click"), (event) => {
    inputLengthCheck();
       if ( inputLengthWithinLimit === true && operators.includes(currentCharacter) === false) {
        currentCharacter = event.target.innerHTML;
        display.innerHTML += event.target.innerHTML;
       }

   })
})




// CLEAR BUTTON
clearBtn.addEventListener(("click"), () => {
    if (currentCharacter == "C") {
        display.innerHTML = " ";
    } 
    else {
        display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length-1);
    }
    currentCharacter = "C";
})

// EQUALS BUTTON 
equalsBtn.addEventListener("click", () => {
    if (display.innerHTML.includes("x")== true) {
        calculation = display.innerHTML.split("x");
        calculationResult = Number(calculation[0]) * Number(calculation[1]);
    }
    else if (display.innerHTML.includes("÷")== true) {
        calculation = display.innerHTML.split("÷");
        calculationResult = Number(calculation[0]) / Number(calculation[1]);
    }
    else if (display.innerHTML.includes("-")== true) {
        calculation = display.innerHTML.split("-");
        calculationResult = Number(calculation[0]) - Number(calculation[1]);
    }
    else if (display.innerHTML.includes("+")== true) {
        calculation = display.innerHTML.split("+");
        calculationResult = Number(calculation[0]) + Number(calculation[1]);
    }
    display.innerHTML = calculationResult;
})

 // PERCENT BUTTON 
percentBtn.addEventListener("click", () => {
    display.innerHTML  = display.innerHTML/100;
})
