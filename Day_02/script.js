// 1. Find the maximum of three numbers
function maxOfThreeNumber(x, y, z) {
  let max;
  if (x >= y && x >= z) {
    max = { x };
  } else if (y >= z) {
    max = { y };
  } else {
    max = { z };
  }
  return max;
}
// console.log(maxOfThreeNumber(1,2,31));

// 2. Check if a Number is Positive,Negative or Zero
function checkIsNumberPositiveNegativeOrZero(num) {
  if (num === 0) {
    console.log("Number is Zero", num);
  } else if (num < 0) {
    console.log("Number is Negative", num);
  } else {
    console.log("Number is Positive", num);
  }
}
// checkIsNumberPositiveNegativeOrZero(-1);

// 3. Calculate Electricity Bill
function calculateElectricityBill(units) {
  if (typeof units !== "number" || !isFinite(units) || units < 0) {
    throw new Error("units must be a non-negative finite number");
  }

  let total = 0;
  if (units <= 20) {
    total = units * 4;
  } else if (units <= 30) {
    total = 20 * 4 + (units - 20) * 6.5;
  } else if (units <= 50) {
    total = 20 * 4 + 10 * 6.5 + (units - 30) * 8;
  } else {
    total = 20 * 4 + 10 * 6.5 + 20 * 8 + (units - 50) * 10;
  }
  return total;
}

// console.log(calculateElectricityBill(30));

// 4. Check if a  character is a Vowel or Consonant
function checkVowelOrConsonant(letter) {
  if (typeof letter !== "string" || letter.length !== 1) {
    return "Please provide a valid character of length 1.";
  }
  const vowels = "aeiou";
  const char = letter.toLowerCase();

  return vowels.includes(char)
    ? `The letter is Vowel: ${letter}`
    : `The letter is Consonant: ${letter}`;
}
// console.log(checkVowelOrConsonant("sad"));

// 5. Checl A Year is Leap Year or Not
function checkLeapYear(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  }
  return false;
}
// console.log(checkLeapYear(2022));

// 6. Check if a Character is Uppercase, LowerCase , Digit or Special Character
function checkCharacterType(char) {
  if (typeof char !== "string" || char.length !== 1) {
    return "Please provide a single valid character.";
  }
  if (/[A-Z]/.test(char)) {
    return "Uppercase Letter";
  } else if (/[a-z]/.test(char)) {
    return "Lowercase Letter";
  } else if (/[0-9]/.test(char)) {
    return "Digit";
  } else {
    return "Special Character";
  }
}

// console.log(checkCharacterType("T"));

// 7. Calculate Income Tax Based on Slabs
function calculateIncomeTax(income) {
  let tax = 0;

  if (income <= 250000) {
    tax = 0;
  } else if (income <= 500000) {
    tax = (income - 250000) * 0.05;
  } else if (income <= 1000000) {
    tax = 250000 * 0.05 + (income - 500000) * 0.2;
  } else {
    tax = 250000 * 0.05 + 500000 * 0.2 + (income - 1000000) * 0.3;
  }
  return tax;
}
// console.log(calculateIncomeTax(2000000))
