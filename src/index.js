class SmartCalculator {
  constructor(initialValue) {
    this.number = initialValue;
  }

  add(number) {
    this.number +=`+${number}`;
    return this;
  }

  subtract(number) {
    this.number +=`-${number}`;
    return this;
  }

  multiply(number) {
    this.number +=`*${number}`;
    return this;
  }

  devide(number) {
    this.number += `/${number}`;
    return this;
  }

  pow(number) {
    this.number += `^${number}`;
    return this;
  }
  valueOf() {
    let pow = this.number.match(/\d*\^\d*(?!\d*\^)/i);
    let result = 0;
    while(pow!==null){
      result=Math.pow(pow[0].split("^")[0],pow[0].split("^")[1]);
      this.number=this.number.replace(/\d*\^\d*(?!\d*\^)/i,result);
      pow= this.number.match(/\d*\^\d*(?!\d*\^)/i);
    }

    return eval(this.number);
  }
}

module.exports = SmartCalculator;
