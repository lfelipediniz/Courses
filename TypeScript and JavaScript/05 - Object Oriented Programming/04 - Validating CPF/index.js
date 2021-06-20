// 705.484.450-52 070.987.720-03
class ValidateCPF {
    constructor(cpfSent) {
      Object.defineProperty(this, 'cpfClean', {
        writable: false,
        enumerable: true,
        configurable: false,
        value: cpfSent.replace(/\D+/g, '')
      });
    }
  
    isSequence() {
      return this.cpfClean.charAt(0).repeat(11) === this.cpfClean;
    }
  
    generateNewCpf() {
      const cpfNoDigits = this.cpfClean.slice(0, -2);
      const digit1 = ValidateCPF.generateDigit(cpfNoDigits);
      const digit2 = ValidateCPF.generateDigit(cpfNoDigits + digit1);
      this.newCPF = cpfNoDigits + digit1 + digit2;
    }
  
    static generateDigit(cpfNoDigits) {
      let total = 0;
      let reverse = cpfNoDigits.length + 1;
  
      for(let numericString of cpfNoDigits) {
        total += reverse * Number(numericString);
        reverse--;
      }
  
      const digit = 11 - (total % 11);
      return digit <= 9 ? String(digit) : '0';
    }
  
    validate() {
      if(!this.cpfClean) return false;
      if(typeof this.cpfClean !== 'string') return false;
      if(this.cpfClean.length !== 11) return false;
      if(this.isSequence()) return false;
      this.generateNewCpf();
  
      return this.newCPF === this.cpfClean;
    }
  }
  
  let validatecpf = new ValidateCPF('070.987.720-03');
  
  if (validatecpf.validate()) {
    console.log('valid CPF');
  } else {
    console.log('Invalid CPF');
  }
  