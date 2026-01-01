// 1.Check if a Number is Prime
// Input: 7
// Output: Prime Number
function isPrimeNumber(num) {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
// console.log(isPrimeNumber(11));

// 2. Check if two Numbers are Co-Prime
// Input: (7, 8)
// Output: Co-Prime
function isCoPrime(num1, num2) {
  let factors1 = [];
  let greatestCF;
  for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0) {
      factors1.push(i);
    }
  }

  for (let i = factors1.length; i >= 0; i--) {
    if (num2 % factors1[i] === 0) {
      greatestCF = factors1[i];
      break;
    }
  }
  return greatestCF === 1;
}
// console.log(isCoPrime(6,9))

// 3.Print Fibonacci Series up to N Terms
// Input: N = 10
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

function fibonacciSeries(num) {
  let x = 0;
  let y = 1;
  let results = [];
  for (let i = 0; i < num; i++) {
    results.push(x);
    let next = x + y;
    x = y;
    y = next;
  }
  return results;
}
// console.log(fibonacciSeries(5));

// 4. Find the Nth Fibonacci Number
// Input: N = 8
// Output: 13

function nthFibonacciSeries(num) {
  let results = [0n, 1n];
  for (let i = 2n; i < BigInt(num); i++) {
    results.push(results[i - 1n] + results[i - 2n]);
  }
  return results[results.length - 1];
}
// console.log(nthFibonacciSeries(9));

// 5. Check if a Number Belongs to the Fibonacci Series
// Input: 21
// Output: true

// using loop
// function belogsToFibonacciSeries(num){
//     num=BigInt(num);
//     let results = [0n,1n];
//     for(let i = 2n;true; i++){
//         let nextNumber = results[i-1n]+results[i-2n];
//         if(nextNumber === num || nextNumber === 0n) return true;
//         if(nextNumber > num) break;
//         results.push(nextNumber);
//     }
//     return false;
// }
// using Math Formula (5 * n^2 + 4) or (5 * n^2 - 4)
function belogsToFibonacciSeries(num) {
  return (
    Number.isInteger(Math.sqrt(5 * num ** 2 + 4)) ||
    Number.isInteger(Math.sqrt(5 * num ** 2 - 4))
  );
}

// console.log(belogsToFibonacciSeries(8))

// 6.Print All Prime Numbers up to N
// Input: N = 20
// Output: [2, 3, 5, 7, 11, 13, 17, 19]

function printAllPrimeNumbersUptoN(num) {
  let primeNumbers = [];
  for (let i = 2; i <= num; i++) {
    if (isPrimeNumber(i)) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
}
// console.log(printAllPrimeNumbersUptoN(7));

// 7.Sum of All Prime Numbers till N
// Input: N = 10
// Output: Sum = 17
function sumOfAllPrimeNumbersUptN(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrimeNumber(i)) {
      sum = sum + i;
    }
  }

  return sum;
}
// console.log(sumOfAllPrimeNumbersUptN(7));

// 8.Check if the Sum of Two Consecutive Fibonacci Numbers is Prime
// Input: (5 + 8)
// Output: 13 is Prime

// 9.Print First N Prime Fibonacci Numbers
// Input: N = 5
// Output: 2, 3, 5, 13, 89
function printFirstNPrimeFibonacciNumbers(n) {
  let count = 0;
  let a = 0,
    b = 1;
  let result = [];

  while (count < n) {
    let fib = a + b;
    a = b;
    b = fib;

    if (isPrimeNumber(fib)) {
      result.push(fib);
      count++;
    }
  }

  return result;
}
// console.log(printFirstNPrimeFibonacciNumbers(5));

// 11.Print All Fibonacci Numbers up to a Given Limit
// Input: Limit = 100
// Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
function printFibonacciNumberUptoN(num) {
  let a = 0;
  let b = 1;
  let series = [];
  for (let i = 2; i < num; i++) {
    let fib = a + b;
    if (fib > num) {
      break;
    }
    a = b;
    b = fib;

    console.log(fib);
    series.push(fib);
  }
  return series;
}

console.log(printFibonacciNumberUptoN(20));
