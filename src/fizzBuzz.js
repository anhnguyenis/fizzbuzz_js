var Fizzbuzz = function () {};

Fizzbuzz.prototype._isDivisibleBy = function(number, divisor) {
  return (number % divisor === 0);
};

Fizzbuzz.prototype.isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3);
};

Fizzbuzz.prototype.isDivisibleByFive = function(number) {
  return this._isDivisibleBy(number, 5);
};

Fizzbuzz.prototype.isDivisibleByFifteen = function(number) {
  return this._isDivisibleBy(number, 15);
};

Fizzbuzz.prototype.says = function(number) {
  if (this.isDivisibleByFifteen(number)) {
    return "FizzBuzz";
  } else if (this.isDivisibleByThree(number)) {
    return "Fizz";
  } else if (this.isDivisibleByFive(number)) {
    return "Buzz";
  } else {
    return number;
  }
};

/*
in console:
var fizzBuzz = new Fizzbuzz();
for (var i = 1; i <= 100; i++) {
console.log(fizzBuzz.says(i));
}
*/
