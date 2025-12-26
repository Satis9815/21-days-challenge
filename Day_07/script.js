// 1.Find the Prime Factorization (Return as an Array)
// Input: N = 84
// Output: [2, 2, 3, 7]
function getPrimeFactorization(num) {
  let primeFactors = [];
  let factor;
  while (num % 2 === 0) {
    primeFactors.push(2);
    num = num / 2;
  }
  factor = 3;
  while (factor <= Math.sqrt(num)) {
    while (num % factor === 0) {
      primeFactors.push(factor);
      num = num / factor;
    }
    factor += 2;
  }

  if (num > 2) primeFactors.push(num);
  return primeFactors;
}

// console.log(getPrimeFactorization(150));

// 2.Factorization in Exponent Form
// Input: N = 360
// Output: "2^3 × 3^2 × 5^1"

function getfactorizationInExponentForm(num) {
  let primeFactors = {};
  let factor;
  let formattedStr = "";
  while (num % 2 === 0) {
    primeFactors[2] = (primeFactors[2] || 0) + 1;
    num = num / 2;
  }
  factor = 3;
  while (factor <= Math.sqrt(num)) {
    while (num % factor === 0) {
      primeFactors[factor] = (primeFactors[factor] || 0) + 1;
      num = num / factor;
    }
    factor += 2;
  }

  if (num > 2) {
    primeFactors[num] = (primeFactors[num] || 0) + 1;
  }

  Object.entries(primeFactors).forEach(([key, value], index) => {
    formattedStr += `${key}^${value} ${
      Object.entries(primeFactors).length - 1 !== index ? "X" : ""
    } `;
  });
  return formattedStr;
}

// console.log(getfactorizationInExponentForm(150));

// 3. Distinct Prime Factor Count
// Input: N = 100
// Output: 2

function getDistinctPrimeFactorsCount(num) {
  let primeFactors = {};
  let factor;
  while (num % 2 === 0) {
    primeFactors[2] = (primeFactors[2] || 0) + 1;
    num = num / 2;
  }
  factor = 3;
  while (factor <= Math.sqrt(num)) {
    while (num % factor === 0) {
      primeFactors[factor] = (primeFactors[factor] || 0) + 1;
      num = num / factor;
    }
    factor += 2;
  }

  if (num > 2) {
    primeFactors[num] = (primeFactors[num] || 0) + 1;
  }

  return Object.keys(primeFactors).length;
}

// console.log(getDistinctPrimeFactorsCount(100));

// 4.Check if a Number Is a Powerful Number
// A number is powerful if every prime factor appears with an exponent ≥ 2.
// Input: N = 36
// Output: true

function isPowerfulNumber(num) {
  let primeFactors = {};
  let factor;
  while (num % 2 === 0) {
    primeFactors[2] = (primeFactors[2] || 0) + 1;
    num = num / 2;
  }
  factor = 3;
  while (factor <= Math.sqrt(num)) {
    while (num % factor === 0) {
      primeFactors[factor] = (primeFactors[factor] || 0) + 1;
      num = num / factor;
    }
    factor += 2;
  }

  if (num > 2) {
    primeFactors[num] = (primeFactors[num] || 0) + 1;
  }
  return Math.min(...Object.values(primeFactors)) >= 2;
}

// console.log(isPowerfulNumber(36));

// 5.Find the Product of All Distinct Prime Factors
// Input: N = 150
// Output: 30

function getProductOfAllDistinctPrimeFactors(num) {
  let primeFactors = {};
  let factor;
  let multiply = 1;
  while (num % 2 === 0) {
    primeFactors[2] = (primeFactors[2] || 0) + 1;
    num = num / 2;
  }
  factor = 3;
  while (factor <= Math.sqrt(num)) {
    while (num % factor === 0) {
      primeFactors[factor] = (primeFactors[factor] || 0) + 1;
      num = num / factor;
    }
    factor += 2;
  }

  if (num > 2) {
    primeFactors[num] = (primeFactors[num] || 0) + 1;
  }
  Object.keys(primeFactors).forEach((key) => {
    multiply *= key;
  });
  return multiply;
}

// console.log(getProductOfAllDistinctPrimeFactors(100));

// 6.Check if a Number Is a Square-Free Number
// A number is square-free if none of its prime factors repeat.
// Input: N = 30
// Output: Square-Free Number (2 × 3 × 5 → no repeats)
function getSquareFreeNumbers(num) {
  let primeFactors = {};
  let factor;
  while (num % 2 === 0) {
    primeFactors[2] = (primeFactors[2] || 0) + 1;
    num = num / 2;
  }
  factor = 3;
  while (factor <= Math.sqrt(num)) {
    while (num % factor === 0) {
      primeFactors[factor] = (primeFactors[factor] || 0) + 1;
      num = num / factor;
    }
    factor += 2;
  }
  if (num > 2) {
    primeFactors[num] = (primeFactors[num] || 0) + 1;
  }
  return Object.values(primeFactors).every((count) => count === 1);
}

// console.log(getSquareFreeNumbers(100));

// 7. Check if a Number Is a Smith Number
// A composite number whose sum of digits = sum of digits of prime factors.
// Input: N = 666
// Output: Smith Number

function sumOfDigits(num) {
  if (num === 0) return [0];
  let sum = 0;
  let digits = [];
  let temp = Math.abs(num);
  while (temp > 0) {
    digits.push(temp % 10);
    temp = Math.floor(temp / 10);
  }
  digits.forEach((d) => {
    sum += d;
  });
  return sum;
}

function isSmithNumber(num) {
  let primeFactors = {};
  let factor;
  let orginalNumber = num;
  while (num % 2 === 0) {
    primeFactors[2] = (primeFactors[2] || 0) + 1;
    num = num / 2;
  }
  factor = 3;
  while (factor <= Math.sqrt(num)) {
    while (num % factor === 0) {
      primeFactors[factor] = (primeFactors[factor] || 0) + 1;
      num = num / factor;
    }
    factor += 2;
  }
  if (num > 2) {
    primeFactors[num] = (primeFactors[num] || 0) + 1;
  }

  if (
    Object.keys(primeFactors).length === 1 &&
    primeFactors[Object.keys(primeFactors)[0]] === 1
  ) {
    return false;
  }

  let originalSum = sumOfDigits(orginalNumber);
  let factorSum = 0;

  for (let prime in primeFactors) {
    let count = primeFactors[prime];
    factorSum += sumOfDigits(prime) * count;
  }
  return originalSum === factorSum ? 'Smith Number' :'Not a Smith Number';
}

// console.log(isSmithNumber(27));

// 8.Check if a Number Is an Ugly Number
// Ugly numbers have only 2, 3, 5 as prime factors.
// Input: N = 18
// Output: Not Ugly (Because 18 → 2 × 3 × 3 → allowed)
// Input: N = 14
// Output: Not Ugly (Contains 7)

// 9.Check if a Number Is a Kaprekar Number
// Square the number → split → sum should give the original number.
// Input: N = 45
// Output: Kaprekar Number (45² = 2025 → 20 + 25 = 45)

// 10.Check if a Number Is a Happy Number
// Repeatedly replace the number with the sum of squares of its digits. If it becomes 1, it is Happy.
// Input: N = 19
// Output: Happy Number

// 11.Number Base Conversion (Any Base to Any Base)
// Input: Number = "101101", From Base = 2, To Base = 10
// Output: 45

// 12.Swap Variable without using third variable
// Input: a = 5, b = 6
// Output: a = 6, b = 5
