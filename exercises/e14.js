
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  const answer = [];
  for (let acc of array) {
    let depositSum = 0;
    let withdrawalSum = 0;

    for (let w of acc.withdrawals || []) {
      withdrawalSum += w;
    }

    for (let d of acc.deposits || []) {
      depositSum += d;
    }

    if ((depositSum - withdrawalSum) !== acc.balance) {
      answer.push(acc);
    }
  }
  return answer;
}




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
