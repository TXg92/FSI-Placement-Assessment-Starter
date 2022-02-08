// HINT: You can delete this console.log after you no longer need it!
console.log("JavaScript code has loaded!");
// First, tell us your name
let yourName = "Tenzin Tsegyal"; // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0; // Gingerbread
let cc = 0; // Chocolate Chip
let sugar = 0; // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector("#credit");
// selecting the element with an id of add-gb
//gb cookie set up
let gbPlusBtn = document.querySelector("#add-gb");
let gbMinusBtn = document.querySelector("#minus-gb");
let gbQtyDisplay = document.querySelector("#qty-gb");
//cc coookie set up
let ccPlusBtn = document.querySelector("#add-cc");
let ccMinusBtn = document.querySelector("#minus-cc");
let ccQtyDisplay = document.querySelector("#qty-cc");
//ss cookie setup
let ssPlusBtn = document.querySelector("#add-sugar");
let ssMinusBtn = document.querySelector("#minus-sugar");
let ssQtyDisplay = document.querySelector("#qty-sugar");
//total setup

// Code to update name display
credit.textContent = `Created by ${yourName}`;

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener("click", function () {
  gb++;
  gbQtyDisplay.textContent = gb;
  // HINT: You can delete this console.log after you no longer need it!
});

gbMinusBtn.addEventListener("click", function () {
  // HINT: You can delete this console.log after you no longer need it!
  gb--;
  gbQtyDisplay.textContent = gb;
  // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
});

ccPlusBtn.addEventListener("click", function () {
  cc++;
  ccQtyDisplay.textContent = cc;
});

ccMinusBtn.addEventListener("click", function () {
  cc--;
  ccQtyDisplay.textContent = cc;
});

ssPlusBtn.addEventListener("click", function () {
  sugar++;
  ssQtyDisplay.textContent = sugar;
});

ssMinusBtn.addEventListener("click", function () {
  sugar--;
  ssQtyDisplay.textContent = sugar;
});
//HINT: You can delete this console.log after you no longer need it!
//});
// TODO: Hook up event listeners for the rest of the button
