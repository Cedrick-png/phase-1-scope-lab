// Write your solution in this file!
// Declare customerName in global scope
var customerName = `bob`;

// function to uppercase customerName
function upperCaseCustomerName() {
  return customerName = `BOB`;
}  

// Function to declare bestCustomer globally
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Function to overwrite bestCustomer globally
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = 'Alice';

// Attempting to change 
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = `anybody`;
}
