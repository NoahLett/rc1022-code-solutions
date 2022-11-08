/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var credit = new Transaction('deposit', amount);
    this.transactions.push(credit);
    return true;
  } else if (!Number.isInteger(amount) || amount <= 0) {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    var debit = new Transaction('withdrawal', amount);
    this.transactions.push(debit);
    return true;
  } else if (!Number.isInteger(amount) || amount <= 0) {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var totalWithdrawals = 0;
  var totalDeposits = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      totalDeposits += Number(this.transactions[i].amount);
    } else if (this.transactions[i].type === 'withdrawal') {
      totalWithdrawals += Number(this.transactions[i].amount);
    }
  }
  var balance = totalDeposits - totalWithdrawals;
  return balance;
};
