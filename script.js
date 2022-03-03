let display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number-btn");
const functionButtons = document.querySelectorAll("function-btn")
const allButtons = document.querySelectorAll("button")
const clearButton = document.querySelector("#clear")
const addButton = document.querySelector("#function-add")
let currentCharacter = [];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// let sum = []
// const selectedButton = display.innerHTML

//This function needs to return a number to the display when the number buttons are clicked
numberButtons.forEach(button => {
    button.addEventListener(("click"), (event) => {
        currentCharacter = event.target.innerHTML;
        display.innerHTML += event.target.innerHTML;
    })
})

// CLEAR BUTTON
clearButton.addEventListener("click", () => display.innerHTML = "")


//ADDITON FUNCTION
addButton.addEventListener(("click"), () => {
  const totalSum = [`${display.innerHTML} +`];
    display.innerHTML = totalSum;
})



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

// For addition I need the display values to be added together when the calculate button is selceted

///numberButtons.addEventListener("click", () => display.innerHTML = 0)


// //num1Btn.addEventListener("click", () => {num1btn.style.backgroundcolor = "red"})

// % code as seperate one ie times by 100
// operators 

//if you press cancel what needs to happed? if you press cencel twice. 