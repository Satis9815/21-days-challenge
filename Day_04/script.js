// 1.Split Number into Digits  don't use string operation
// Input n=12345
// Output:[1,2,3,4,5]
function splitNumerIntoDigit(num) {
  if (num === 0) return [0];
  let digits = [];
  let temp = Math.abs(num);

  while (temp > 0) {
    digits.push(temp % 10);
    temp = Math.floor(temp / 10);
  }

  return digits.reverse();
}
// console.log(splitNumerIntoDigit(12345));

// 2. Revese a Number
function reverseNumber(num) {
  if (num === 0) return [0];
  let digits = [];
  let temp = Math.abs(num);
  let revNumber = 0;
  while (temp > 0) {
    digits.push(temp % 10);
    temp = Math.floor(temp / 10);
  }
  digits.reverse();
  for (let i = 0; i < digits.length; i++) {
    revNumber += digits[i] * 10 ** i;
  }
  return revNumber;
}

// console.log(reverseNumber(123))

// 3. Remove the Decimal Point Mathmatically don't use string operation
// Input n= 15.56
// Output:1556
function removeDecimals(num) {
  while (!Number.isInteger(num)) {
    num = num * 10;
  }
  return num;
}

// console.log(removeDecimals(15.56));

// 4. Seprate Whole and Fractional Parts of a Number do not use Math.trunc() method
// Input n= 5.76
// Output:whole=5,Fractional=76

function seprateNumbers(num) {
  const fractional = Number((num % 1).toFixed(10));
  const wholeNumer = Number((num - fractional).toFixed(10));
  return { wholeNumer, fractional };
}

// console.log(seprateNumbers(12.23));

// 5. Generate a Decimal Number from Whole and Fractional Digits

// Input: Whole = [1, 2], Fraction = [3, 4]
// Output: 12.34

function generateWholeFractionalNumber(
  wholeDigits = [],
  fractionalDigits = []
) {
  let wholePart = 0;
  let fractionalPart = 0;

  for (let i = 0; i < wholeDigits.length; i++) {
    wholePart += wholeDigits[i] * 10 ** (wholeDigits.length - i - 1);
  }
  for (let i = 0; i < fractionalDigits.length; i++) {
    fractionalPart += fractionalDigits[i] * 10 ** -(i + 1);
  }
  return wholePart + Number(fractionalPart.toFixed(10));
}

// console.log(generateWholeFractionalNumber([1, 2], [1, 3]));

// 6. Check a Number is palindrome or not
function isPalindrome(num) {
  let orginalNumber = num;
  let digits = [];
  let revNumber = 0;

  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  digits.reverse();

  for (let i = 0; i < digits.length; i++) {
    revNumber += digits[i] * 10 ** i;
  }

  return revNumber === orginalNumber;
}

// console.log(isPalindrome(1221));

// 7. Check if a Number is an Armstrong Number
function isArmstrongNumber(num) {
  let orginalNumber = num;
  let digits = [];
  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  digits.reverse();
  let digitsPowerSum = 0;
  for (let i = 0; i < digits.length; i++) {
    digitsPowerSum += digits[i] ** digits.length;
  }
  return orginalNumber === digitsPowerSum;
}
// console.log(isArmstrongNumber(1612))

// 8.Find the Sum of Digits
function findSumOfDigits(num) {
  let sum = 0;
  let digits = [];
  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  for (let i = 0; i < digits.length; i++) {
    sum += digits[i];
  }
  return sum;
}
// console.log(findSumOfDigits(134));

// 9.Find the Average of Digits
// Way 1
function findAverageOfdigits(num) {
  let sum = 0;
  let digits = [];
  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  for (let i = 0; i < digits.length; i++) {
    sum += digits[i];
  }
  return sum / digits.length;
}
// console.log(findAverageOfdigits(1234))

// Way 2
// function findAverageOfdigits(num) {
//   let sum = 0;
//   let count=0;
//   while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//     count++;
//   }

//   return sum / count;
// }
// console.log(findAverageOfdigits(123))

// 10. Find the Largest and Smallest Digit in a Number
// Way 1
function findLargestAndSmallestNumer(num) {
  let largest;
  let smallest;

  let digits = [];

  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  digits.reverse();
  largest = digits[0];
  smallest = digits[0];
  for (let i = 1; i < digits.length; i++) {
    if (digits[i] > largest) {
      largest = digits[i];
    }
    if (digits[i] < smallest) {
      smallest = digits[i];
    }
  }
  return { largest, smallest };
}
// console.log(findLargestAndSmallestNumer(23145));

// Way 2
// function findLargestAndSmallestNumer(num) {
//   let largest = 0;
//   let smallest =9;

//   while (num > 0) {
//     let digit = num % 10;
//     if (digit > largest) largest = digit;
//     if(digit < smallest) smallest = digit;
//     num = Math.floor(num / 10);
//   }

//   return { largest, smallest };
// }
// console.log(findLargestAndSmallestNumer(236140));


// 11. Check if a Number is a Strong Number 

function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

function isStrongNumber(num) {
  let sum = 0;
  let temp = num;

  while (temp > 0) {
    let digit = temp % 10;
    sum += factorial(digit);
    temp = Math.floor(temp / 10);
  }

  return sum === num;
}

console.log(isStrongNumber(145)); 
console.log(isStrongNumber(2));  
console.log(isStrongNumber(123)); 

// Assignments 
// 12. Check if a Number is an Automorphic Number
// 13. Find the Frequency of Each Digit
// 14. Check if a Number is a Harshad Number
