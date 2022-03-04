const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number-btn");
const equationButtons = document.querySelectorAll(".equation-btn")
const allButtons = document.querySelectorAll("button")
const clearButton = document.querySelector("#clear")
const addButton = document.getElementById("add")
const minusButton = document.getElementById("minus")
const percentButton = document.getElementById("percent")
const divideButton = document.getElementById("divide")
const equalsButton = document.getElementById("equals")
const mathFunction = document.querySelectorAll(".math-function")
const inputLengthCheck = () => {
    if (display.innerHTML.length<15) {
        inputLengthWithinLimit = true;
    } else {
        inputLengthWithinLimit = false;
    }
}

let currentCharacter = "";



// SHOW UP SELCTED NUMBER BUTTON ON DISPLAY AND CHARACTER LIMIT TO 15
numberButtons.forEach(button => {
    button.addEventListener(("click"), (event) => {
        inputLengthCheck();
        if (inputLengthWithinLimit === true) {
            currentCharacter = event.target.innerHTML;
            display.innerHTML += currentCharacter;
        }
    })
}); 



// EQUATION BUTTONS
// equationButtons.forEach(button => {
//     button.addEventListener(("click"), (event) => {
//         if (display.innerHTML.includes("+"||"-"||"*"||"/")=== false) {
//             currentCharacter = event.target.innerHTML;
//             display.innerHTML += event.target.innerHTML;
//         }
//         else {
//             display.innerHTML = "";
            
//        }
 
//  }) })  

// const equationButtonsNew = ["+", "-", "*", "/"];
//  equationButtons.forEach(button => {
//     button.addEventListener(("click"), (event) => {
//         if (display.innerHTML.includes(equationButtonsNew)) {   
//             currentCharacter = event.target.innerHTML;  
//         }
//         else  {
//         currentCharacter = event.target.innerHTML;
//         display.innerHTML += event.target.innerHTML;}
//     })
// })

equationButtons.forEach(button => {
   button.addEventListener(("click"), (event) => {
       if (display.innerHTML.includes("+")) {   
           currentCharacter = event.target.innerHTML;  
       }
       else  {
       currentCharacter = event.target.innerHTML;
       display.innerHTML += event.target.innerHTML;}
   })
})
// CLEAR BUTTON
clearButton.addEventListener(("click"), () => {
    if (currentCharacter == "C") {
        display.innerHTML = " ";
    } 
    else {
        display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length-1);
    }
    currentCharacter = "C";
})


// EQUALS BUTTON 
equalsButton.addEventListener("click", () => {
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
percentButton.addEventListener("click", () => {
    display.innerHTML  = display.innerHTML/100;
})
