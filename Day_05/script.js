// 1.Print all factors of a Number in Array
// Input: N = 24
// Output: [1, 2, 3, 4, 6, 8, 12, 24]
function getAllFactors(num) {
  let factors = [];
  let loopCount = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    loopCount++;
    if (num % i === 0) {
      factors.splice(factors.length / 2, 0, i);
      let otherPair = num / i;
      if (i !== otherPair) factors.splice(factors.length / 2 + 1, 0, otherPair);
    }
  }
  return factors;
}

// console.log(getAllFactors(10));
// console.log(getAllFactors(27));
// console.log(getAllFactors(100));

// 2.Print All Multiples of a Number up to N In Array Format
// Input: Number = 4, Limit = 30
// Output: [4, 8, 12, 16, 20, 24, 28]
function multiplesOfANumber(num, limit) {
  let multiples = [];
  for (let i = num; i <= limit; i += num) {
    if (i % num === 0) {
      multiples.push(i);
    }
  }
  return multiples;
}
// console.log(multiplesOfANumber(2, 12));

// 3.Find the HCF (Highest Common Factor) or GCD of Two Numbers
// Input: 12, 18
// 1,2,3,4,6,12
//1,2,3,6,9,18
// Output: HCF = 6
function HCF(num1, num2) {
  let factors = [];
  let loopCount = 0;
  let greatestCF;
  let divisor = num1 < num2 ? num1 : num2;
  let dividend = num1 > num2 ? num1 : num2;
  while (dividend % divisor !== 0) {
    loopCount++;
    const remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }
  console.log({ loopCount });
  return divisor;

  // Another way
  // for (let i = 1; i <= Math.sqrt(num1); i++) {
  //   loopCount++;
  //   if (num1 % i === 0) {
  //     factors.splice(factors.length / 2, 0, i);
  //     let otherPair = num1 / i;
  //     if (i !== otherPair) factors.splice(factors.length / 2 + 1, 0, otherPair);
  //   }
  // }

  // for (let i = factors.length; i > 0; i--) {
  //   if (num2 % factors[i] === 0) {
  //     greatestCF = factors[i];
  //     break;
  //   }
  // }

  // return { greatestCF,loopCount };
}

// console.log(HCF(25, 45));
// console.log(HCF(18, 12));
// console.log(HCF(8, 10));

// 4. Find the LCM (Least Common Multiple) of Two Numbers
function findLCM(a, b) {
  let divisor = a < b ? a : b;
  let dividend = a > b ? a : b;
  let loopCount = 0;

  while (dividend % divisor !== 0) {
    loopCount++;
    const remainder = dividend % divisor;
    dividend = divisor;
    divisor = remainder;
  }

  return (a * b) / divisor;
}
function totalFactors(num) {
  const allfactors = getAllFactors(num);
  return allfactors.length;
}
// console.log(totalFactors(6));

function sumOfAllFactors(num) {
  let factors = [];
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  factors.forEach((element) => {
    sum += element;
  });
  console.log(factors);
  return sum;
}
// console.log(sumOfAllFactors(12));

// 5.Count the Total Number of Factors of a Number
// Input: N = 24
// Output: 8 Factors
function totalFactors(num) {
  let factors = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      factors.splice(factors.length / 2, 0, i);
      let otherPair = num / i;
      if (i !== otherPair) factors.splice(factors.length / 2 + 1, 0, otherPair);
    }
  }
  return factors.length;
}
// console.log(totalFactors(24));

// 6.Sum of All Factors of a Number
// Input: N = 12
// Output: Sum = 28

function sumOfAllFactors(num) {
  let factors = [];
  let sum = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      factors.splice(factors.length / 2, 0, i);
      let otherPair = num / i;
      if (i !== otherPair) factors.splice(factors.length / 2 + 1, 0, otherPair);
    }
  }
  for (let i = 0; i < factors.length; i++) {
    sum = sum + factors[i];
  }
  return sum;
}
// console.log(sumOfAllFactors(12));

// 7.Find the Greatest Factor of a Number (Other Than Itself)
// Input: N = 36
// Output: 18
function greatestFactor(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (i % 2 === 0) {
      return num / i;
    }
    return 1;
  }
}
// console.log(greatestFactor(10));

// 8.Check if a Number is a Perfect Number
// Input: N = 28
// Output: Perfect Number
// If sum of all proper divisors = number → Perfect Number.
function isPerfectNumber(n) {
  debugger;
  if (n <= 1) return false;

  let sum = 1; 

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      sum += i;

      if (i !== n / i) {
        sum += n / i;
      }
    }
  }

  return sum === n;
}
// console.log(isPerfectNumber(28));

// 9.Find the HCF and LCM of Three Numbers
// Input: 8, 12, 16
// Output: HCF = 4, LCM = 48
function findThreeNumberHCF(a, b, c) {
  return HCF(HCF(a, b), c);
}
console.log(findThreeNumberHCF(8,12,16));

function findThreeNumberLCM(a, b, c) {
  return findLCM(findLCM(a, b), c);
}
console.log(findThreeNumberLCM(8,12,16));
