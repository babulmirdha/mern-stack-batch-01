function BankAccount(initialBalance) {
  let balance = initialBalance; // Private variable

  // Public method to deposit money
  this.deposit = function (amount) {
    if (amount > 0) {
      balance += amount;
      console.log(`Deposited: $${amount}`);
    }
  };

  // Public method to check balance
  this.getBalance = function () {
    return balance;
  };
}

const myAccount = new BankAccount(100);
myAccount.deposit(50); // Deposited: $50
console.log(myAccount.getBalance()); // 150
// console.log(myAccount.balance);    // Undefined (Private variable)
