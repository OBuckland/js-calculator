let display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number-btn");
const functionButtons = document.querySelectorAll("function-btn")
const allButtons = document.querySelectorAll("button")
const clearButton = document.querySelector("#clear")
const addButton = document.getElementById("add")
const minusButton = document.getElementById("minus")
const percentButton = document.getElementById("percent")
const divideButton = document.getElementById("divide")
const equalsButton = document.getElementById("equals")
const mathFunction = document.querySelectorAll(".math-function")

let currentCharacter = "";

// let sum = []
// const selectedButton = display.innerHTML

// INPUT 1
// const input1 = 
// INPUT 2

//This function needs to return a number to the display when the number buttons are clicked
numberButtons.forEach(button => {
    button.addEventListener(("click"), (event) => {
        currentCharacter = event.target.innerHTML;
        display.innerHTML += event.target.innerHTML;
    })
})

//
mathFunction.forEach(button => {
    button.addEventListener(("click"), (event) => {
        currentCharacter = event.target.innerHTML;
        display.innerHTML += event.target.innerHTML;
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




//ADDITON FUNCTION
// For addition I need the display values to be added together when the calculate
 //button is selceted
// addButton.addEventListener(("click"), () => {
//   const totalSum = [`${display.innerHTML} +`];
//     display.innerHTML = totalSum;
// })

// //MINUS FUNCTION
// minusButton.addEventListener(("click"), () => {
//     const totalSum = [`${display.innerHTML} -`];
//       display.innerHTML = totalSum;
//   })


// // EQUALS FUNCTION
// equalsButton.addEventListener(("click"), () => {
//     currentCharacter += `${display.innerHTML}`;
//     const finalSum = 
// })

// export const totalScoresArr = (scoresArr) => {
//   const totalScore = scoresArr.reduce((total, current) => (total += current), 0);
//   return totalScore;

// a function that just displays the function symbols

// then a function that runs the symbols with the numbers when = button clicked
// functionAdd = display.value + display.value 

// addBtn.addEventListener("click", functionAdd);

// Totals numbers
//  * A function that uses the REDUCE array iterator to total an array of scores.
//  * The scores will be numbers.
//  *
//  * @param {number[]} numberArr [7, 7, 6, 2, 3, 2, 3]
//  * @return {number} 30
//  */
// export const totalScoresArr = (scoresArr) => {
//   const totalScore = scoresArr.reduce((total, current) => (total += current), 0);
//   return totalScore;



///numberButtons.addEventListener("click", () => display.innerHTML = 0)


// //num1Btn.addEventListener("click", () => {num1btn.style.backgroundcolor = "red"})

// % code as seperate one ie times by 100
// operators 

//if you press cancel what needs to happed? if you press cencel twice. 