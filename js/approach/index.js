// How to work on tech tasks. Step by step guide

// 1. Learn requirement (WHAT?) +++
// 2. Create step by step algo (& input/output for functions) (HOW?) +++
// 3. Write draft solution & testing +++
// 4. Refactoring & final testing -> final solution

//input: number
//output: undefined

//algo
//1.iterate 2 .. num
//2.check if number is prime
//  2.0 create counter
//  2.1 iterate 2 .. number
//  2.2 if number % index === 0 -> count+=1 +++
//  2.3 if number === 1 -> is not prime +++
//3.if prime -> console
function getPrimes(num) {
  for (let number = 2; number <= num; number += 1) {
    let counter = 0;

    for (let index = 2; index <= number; index += 1) {
      if (!(number % index)) {
      }
    }

    if (counter === 1) {
      console.log(number);
    }
  }
}

getPrimes(11);
getPrimes(10);
getPrimes(15);
