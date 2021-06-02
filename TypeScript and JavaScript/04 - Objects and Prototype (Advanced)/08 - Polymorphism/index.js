// Superclass
function Account(branch, account, balance) {
  this.agency = agency;
  this.account = account;
  this.balance = balance;
}

Account.prototype.draw = function(value) {
  if(value > this.balance) {
    console.log(`Insufficient balance: ${this.balance}`);
    return;
  }

  this.balance -= value;
  this.showBalance();
};

Account.prototype.deposit = function(value) {
  this.balance += value;
  this.showBalance();
};

Account.prototype.showBalance = function() {
  console.log(
    `Ag/c: ${this.agency}/${this.account} | ` +
    `Balance: R$${this.balance.toFixed(2)}`
  );
};

function CC(agency, account, balance, limit) {
  Account.call(this, agency, account, balance);
  this.limit = limit;
}
CC.prototype = Object.create(Account.prototype);
CC.prototype.constructor = CC;

CC.prototype.withdraw = function(value) {
  if(value > (this.balance + this.limit)) {
    console.log(`Insufficient balance: ${this.balance}`);
    return;
  }

  this.balance -= value;
  this.showBalance();
};

function CP(agency, account, balance) {
  Account.call(this, agency, account, balance);
}
CP.prototype = Object.create(Account.prototype);
CP.prototype.constructor = CP;

const cc = new CC(11, 22, 0, 100);
cc.deposit(10);
cc.withdraw(110);
cc.withdraw(1);

console.log();

const cp = new CP(12, 33, 0);
cp.deposit(10);
cp.withdraw(10);
cp.withdraw(1);