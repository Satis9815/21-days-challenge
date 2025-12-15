// 1.Print all factors of a Number in Array
// Input: N = 24
// Output: [1, 2, 3, 4, 6, 8, 12, 24]
function getAllFactors(num) {
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

// console.log(getAllFactors(10));

// 2.Print All Multiples of a Number up to N In Array Format
// Input: Number = 4, Limit = 30
// Output: [4, 8, 12, 16, 20, 24, 28]
function multiplesOfANumner(num, limit) {
  let multiples = [];
  for (let i = num; i <= limit; i += num) {
    if (i % num === 0) {
      multiples.push(i);
    }
  }
  return multiples;
}
// console.log(multiplesOfANumner(2, 12));

// 3.Find the HCF (Highest Common Factor) or GCD of Two Numbers
// Input: 12, 18
// 1,2,3,4,6,12
//1,2,3,6,9,18
// Output: HCF = 6
function HCF(num1, num2) {
  let factors1 = [];
  let greatestCF;
  for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0) {
      factors1.push(i);
    }
  }

  for (let i = factors1.length; i > 0; i--) {
    // debugger
    if (num2 % factors1[i] === 0) {
      greatestCF = factors1[i];
      break;
    }
  }

  return { greatestCF };
}
console.log(HCF(25, 15));

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
