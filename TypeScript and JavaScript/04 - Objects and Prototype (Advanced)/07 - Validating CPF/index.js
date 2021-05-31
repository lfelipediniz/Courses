function ValidateCPF(cpfSent) {
  Object.defineProperty(this, "cleanCPF", {
    get: function () {
      return cpfSent.replace(/\D+/g, ""); // just take the numbers
    },
  });
}

ValidateCPF.prototype.validate = function () {
  if (typeof this.cleanCPF === "undefined") return false;
  if (this.cleanCPF.length !== 11) return false;

  if (this.isSequence()) return false;

  const partialCPF = this.cleanCPF.slice(0, -2);
  const digit1 = this.digitCreator(partialCPF);
  const digit2 = this.digitCreator(partialCPF + digit1);

  const newCPF = partialCPF + digit1 + digit2;

  return newCPF === this.cleanCPF;
};

ValidateCPF.prototype.digitCreator = function (partialCPF) {
  const cpfArray = Array.from(partialCPF);

  let regressive = cpfArray.length + 1;
  const total = cpfArray.reduce((ac, val) => {
    ac += regressive * Number(val);
    regressive--;
    return ac;
  }, 0);

  const digit = 11 - (total % 11);
  return digit > 9 ? "0" : String(digit);
};

ValidateCPF.prototype.isSequence = function () {
  const sequence = this.cleanCPF[0].repeat(this.cleanCPF.length);
  return sequence === this.cleanCPF; // avoiding problems with sequential CPFs, such as 111.111.111-11
};

const cpf = new ValidateCPF("705.484.450-52");

if (cpf.validate()) console.log("Valid CPF");
else console.log("Invalid CPF");
