// Variables
let tipPercentage = 0;

function fivePercent() {
  tipPercentage = 5;
}
function tenPercent() {
  tipPercentage = 10;
}
function fifteenPercent() {
  tipPercentage = 15;
}
function twentyFivePercent() {
  tipPercentage = 25;
}
function fiftyPercent() {
  tipPercentage = 50;
}
function customPercent() {
  tipPercentage = 42;
  // TODO: Turn custom buttom into an input on click so
  // user can input a custom percentage
}

// Run function on every keydown of any button 

document.addEventListener('keydown', function(event) {

  // Get bill total
  let billTotal = document.getElementById('user-total-input').value;
  
  // Get Tip Percentage
  if (tipPercentage != '' && billTotal != 0) {
    console.log(tipPercentage + ': ' + billTotal);
  }
  

  





  console.log(billTotal);

  // Run function on enter key
  // const ENTERKEY = 13;
  // if (event.keyCode === ENTERKEY) {
  // }
  
});




// Take total and multiply by percentage selected 





// Divide by Number of People to get per person total










// On Click Functions

// fivePercent()
// tenPercent()
// fifteenPercent()
// twentyFivePercent()
// fiftyPercent()
// customPercent()

