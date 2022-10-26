function getSenseOfLife() {
  return 42;
}

console.log(getSenseOfLife());

function getSquare(num) {
  return num ** 2;
}

console.log(getSquare(5));
console.log(getSquare(0));
console.log(getSquare(-7));

function sum(arg1, arg2) {
  return arg1 + arg2;
}

console.log(sum('s', 's'));
console.log(sum(1, 1));
console.log(sum(undefined, undefined));

function getMessage(age) {
  if (age < 0 && typeof age === 'number') {
    return null;
  }
  return `I'm ${age} years old`;
}

console.log(getMessage('asd'));
console.log(getMessage(12));
console.log(getMessage(Infinity));
console.log(getMessage(undefined));
console.log(getMessage(null));

const mult = (a, b) => a * b;
console.log(mult('asd', 'asd'));
console.log(mult(2, 2));

const getMagicNumber = (_) => 17;
console.log(getMagicNumber(NaN));
console.log(getMagicNumber(Number.MAX_SAFE_INTEGER));
