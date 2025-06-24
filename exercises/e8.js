
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithGreatestBalance(array) {
  // Your code goes here...
  var greatest = null;
  for (const data of array) {
    if (data.balance > 0 && (greatest === null || data.balance > greatest.balance)) {
      greatest = data;
    }
  }
  
  if (greatest === null) {
    return [];
  } else {
    return [greatest];
  }
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
