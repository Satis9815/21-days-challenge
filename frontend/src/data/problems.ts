export interface Problem {
  id: string;
  name: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  solution: string;
}

export interface Day {
  id: string;
  title: string;
  description: string;
  problems: Problem[];
  markdown?: string;
}

export const problemsData: Day[] = [
  {
    id: "day-01",
    title: "Day 01 - Basic Loops & Number Patterns",
    description: "Master the fundamentals of loops and number operations",
    markdown: `# Day 01 - Basic Loops & Number Patterns

## Topics Covered
- For loops and iterations
- Number sequences
- Basic arithmetic operations

## Problems
These problems focus on fundamental loop structures and number handling.`,
    problems: [
      {
        id: "print-1-to-n",
        name: "Print Numbers 1 to N",
        description: "Print all numbers from 1 to N",
        difficulty: "Easy",
        category: "Loops",
        solution: `function printOneToN(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += i + "\\n";
  }
  return result;
}

// Alternative: using Array
function printOneToNArray(num) {
  return Array.from({length: num}, (_, i) => i + 1).join("\\n");
}

// Example: printOneToN(5) outputs:
// 1
// 2
// 3
// 4
// 5`,
      },
      {
        id: "print-n-to-1",
        name: "Print N to 1 (Reverse)",
        description: "Print all numbers from N to 1 in reverse",
        difficulty: "Easy",
        category: "Loops",
        solution: `function printNToOne(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += (num - (i - 1)) + "\\n";
  }
  return result;
}

// Alternative: simpler approach
function printNToOneSimple(num) {
  let result = "";
  for (let i = num; i >= 1; i--) {
    result += i + "\\n";
  }
  return result;
}

// Example: printNToOne(5) outputs:
// 5
// 4
// 3
// 2
// 1`,
      },
      {
        id: "print-even-1-to-n",
        name: "Print Even Numbers 1 to N",
        description: "Print all even numbers between 1 and N",
        difficulty: "Easy",
        category: "Loops",
        solution: `function printEvenNumbers(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      result += i + "\\n";
    }
  }
  return result;
}

// More optimized
function printEvenNumbersOptimized(num) {
  let result = "";
  for (let i = 2; i <= num; i += 2) {
    result += i + "\\n";
  }
  return result;
}

// Example: printEvenNumbers(10) outputs:
// 2
// 4
// 6
// 8
// 10`,
      },
      {
        id: "sum-natural-numbers",
        name: "Sum of N Natural Numbers",
        description: "Calculate the sum of first N natural numbers",
        difficulty: "Easy",
        category: "Arithmetic",
        solution: `// Approach 1: Using loop (O(n))
function sumNaturalLoop(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Approach 2: Using formula (O(1)) - Much faster!
function sumNaturalFormula(n) {
  return (n * (n + 1)) / 2;
}

// Example: For n = 5
// Loop: 1+2+3+4+5 = 15
// Formula: (5 * 6) / 2 = 15

// For large numbers, formula is much faster!
// n = 1,000,000,000,000
// Formula: (1000000000000 * 1000000000001) / 2 = 500000000000500000000000`,
      },
      {
        id: "factorial-of-n",
        name: "Factorial of N",
        description: "Calculate the factorial of a number",
        difficulty: "Easy",
        category: "Arithmetic",
        solution: `function factorial(n) {
  if (n < 0) return "Invalid input";
  if (n === 0 || n === 1) return 1;
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Recursive approach
function factorialRecursive(n) {
  if (n <= 1) return 1;
  return n * factorialRecursive(n - 1);
}

// Example: factorial(5) = 5! = 1×2×3×4×5 = 120`,
      },
      {
        id: "sum-even-numbers",
        name: "Sum of Even Numbers up to N",
        description: "Calculate sum of all even numbers from 1 to N",
        difficulty: "Easy",
        category: "Arithmetic",
        solution: `// Approach 1: Loop through all numbers
function sumEvenLoop(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}

// Approach 2: Using formula
function sumEvenFormula(n) {
  const k = Math.floor(n / 2);
  return k * (k + 1);
}

// Example: For n = 10
// Even numbers: 2, 4, 6, 8, 10
// Sum = 30`,
      },
      {
        id: "squares-1-to-n",
        name: "Print Squares of Numbers 1 to N",
        description: "Print squares of all numbers from 1 to N",
        difficulty: "Easy",
        category: "Loops",
        solution: `function printSquares(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += (i * i) + "\\n";
  }
  return result;
}

// Example: printSquares(5) outputs:
// 1
// 4
// 9
// 16
// 25`,
      },
      {
        id: "divisible-3-or-5",
        name: "Numbers Divisible by 3 or 5",
        description: "Print all numbers divisible by 3 or 5 up to N",
        difficulty: "Easy",
        category: "Loops",
        solution: `function divisibleBy3Or5(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i + "\\n";
    }
  }
  return result;
}

// Example: divisibleBy3Or5(30) outputs:
// 3, 5, 6, 9, 10, 12, 15, 18, 20, 21, 24, 25, 27, 30`,
      },
      {
        id: "sum-odd-numbers",
        name: "Sum of Odd Numbers up to N",
        description: "Calculate sum of all odd numbers from 1 to N",
        difficulty: "Easy",
        category: "Arithmetic",
        solution: `// Approach 1: Loop through all numbers
function sumOddLoop(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      sum += i;
    }
  }
  return sum;
}

// Approach 2: Using formula
// Sum of first k odd numbers = k²
function sumOddFormula(n) {
  const k = Math.ceil(n / 2);
  return k * k;
}

// Example: For n = 10
// Odd numbers: 1, 3, 5, 7, 9
// Sum = 25`,
      },
      {
        id: "cubes-1-to-n",
        name: "Print Cubes of Numbers 1 to N",
        description: "Print cubes of all numbers from 1 to N",
        difficulty: "Easy",
        category: "Loops",
        solution: `function printCubes(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += (i * i * i) + "\\n";
  }
  return result;
}

// Example: printCubes(5) outputs:
// 1
// 8
// 27
// 64
// 125`,
      },
      {
        id: "even-perfect-squares",
        name: "Even Perfect Squares",
        description: "Print numbers that are both even and perfect squares",
        difficulty: "Medium",
        category: "Loops",
        solution: `function evenPerfectSquares(n) {
  let result = "";
  for (let i = 1; i * i <= n; i++) {
    const square = i * i;
    if (square % 2 === 0) {
      result += square + "\\n";
    }
  }
  return result;
}

// Example: evenPerfectSquares(100) outputs:
// 4
// 16
// 36
// 64
// 100`,
      },
    ],
  },
  {
    id: "day-02",
    title: "Day 02 - Conditional Logic & Classification",
    description: "Master conditional statements and decision-making logic",
    markdown: `# Day 02 - Conditional Logic & Classification

## Topics Covered
- If-else statements
- Comparison operators
- Classification logic

## Problems
These problems focus on conditional logic and number/character classification.`,
    problems: [
      {
        id: "max-of-three",
        name: "Max of Three Numbers",
        description: "Find the largest of three numbers",
        difficulty: "Easy",
        category: "Conditional Logic",
        solution: `function maxOfThree(x, y, z) {
  if (x >= y && x >= z) {
    return x;
  } else if (y >= z) {
    return y;
  } else {
    return z;
  }
}

// Alternative approach using Math.max()
function maxOfThreeShort(x, y, z) {
  return Math.max(x, y, z);
}

// Example: maxOfThree(10, 25, 15) returns 25`,
      },
      {
        id: "positive-negative-zero",
        name: "Positive/Negative/Zero Classification",
        description: "Classify if a number is positive, negative, or zero",
        difficulty: "Easy",
        category: "Conditional Logic",
        solution: `function classifyNumber(num) {
  if (num === 0) {
    return "Number is Zero";
  } else if (num < 0) {
    return "Number is Negative";
  } else {
    return "Number is Positive";
  }
}

// One-liner approach
function classifyNumberTernary(num) {
  return num === 0 ? "Zero" : num < 0 ? "Negative" : "Positive";
}

// Example: classifyNumber(-5) returns "Number is Negative"`,
      },
      {
        id: "electricity-bill",
        name: "Electricity Bill Calculator",
        description: "Calculate electricity charges with tiered pricing",
        difficulty: "Medium",
        category: "Calculations",
        solution: `function calculateElectricityBill(units) {
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

// Pricing slabs:
// 0-20 units: 4 per unit
// 21-30 units: 6.5 per unit
// 31-50 units: 8 per unit
// Above 50: 10 per unit

// Example: calculateElectricityBill(30) = (20×4) + (10×6.5) = 145`,
      },
      {
        id: "vowel-consonant",
        name: "Vowel or Consonant",
        description: "Classify a character as vowel or consonant",
        difficulty: "Easy",
        category: "Character Classification",
        solution: `function isVowelOrConsonant(letter) {
  if (typeof letter !== "string" || letter.length !== 1) {
    return "Please provide a single character";
  }
  
  const vowels = "aeiouAEIOU";
  
  if (vowels.includes(letter)) {
    return "Vowel";
  } else if (/[a-zA-Z]/.test(letter)) {
    return "Consonant";
  } else {
    return "Not a valid letter";
  }
}

// Alternative using regex
function isVowelOrConsonantRegex(letter) {
  if (/[aeiouAEIOU]/.test(letter)) return "Vowel";
  if (/[a-zA-Z]/.test(letter)) return "Consonant";
  return "Not a valid letter";
}

// Example: isVowelOrConsonant('e') returns "Vowel"`,
      },
      {
        id: "leap-year",
        name: "Leap Year Checker",
        description: "Determine if a year is a leap year",
        difficulty: "Medium",
        category: "Date Validation",
        solution: `function checkLeapYear(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  }
  return false;
}

// Logic:
// - Divisible by 400 → Leap Year
// - Divisible by 100 (but not 400) → Not Leap Year
// - Divisible by 4 (but not 100) → Leap Year
// - Not divisible by 4 → Not Leap Year

// Example: checkLeapYear(2024) returns true`,
      },
      {
        id: "character-type",
        name: "Character Type Classification",
        description:
          "Identify character as uppercase, lowercase, digit, or special",
        difficulty: "Easy",
        category: "Character Classification",
        solution: `function checkCharacterType(char) {
  if (typeof char !== "string" || char.length !== 1) {
    return "Please provide a single character";
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

// Alternative without regex
function checkCharacterTypeAlt(char) {
  if (char >= 'A' && char <= 'Z') return "Uppercase Letter";
  if (char >= 'a' && char <= 'z') return "Lowercase Letter";
  if (char >= '0' && char <= '9') return "Digit";
  return "Special Character";
}

// Example: checkCharacterType('T') returns "Uppercase Letter"`,
      },
      {
        id: "income-tax",
        name: "Income Tax Calculator",
        description: "Calculate taxes based on income slabs",
        difficulty: "Hard",
        category: "Financial Calculation",
        solution: `function calculateIncomeTax(income) {
  let tax = 0;
  
  if (income <= 250000) {
    tax = 0;
  } else if (income <= 500000) {
    tax = (income - 250000) * 0.05;
  } else if (income <= 1000000) {
    tax = (250000 * 0.05) + ((income - 500000) * 0.20);
  } else {
    tax = (250000 * 0.05) + (500000 * 0.20) + ((income - 1000000) * 0.30);
  }
  
  return tax;
}

// Tax Slabs:
// 0-250,000: No tax
// 250,001-500,000: 5% on excess
// 500,001-1,000,000: 5% on first slab + 20% on excess
// 1,000,001+: 5% + 20% + 30% on excess

// Example: calculateIncomeTax(600000) = (250000×0.05) + (100000×0.20) = 32500`,
      },
    ],
  },
  {
    id: "day-03",
    title: "Day 03 - Pattern Programs",
    description: "Master pattern printing with nested loops",
    markdown: `# Day 03 - Pattern Programs

## Topics Covered
- Nested loops
- Pattern recognition
- String manipulation
- Spacing and formatting

## Problems
These problems strengthen your understanding of loops and pattern generation.`,
    problems: [
      {
        id: "left-aligned-increasing-triangle",
        name: "Left Aligned Increasing Triangle",
        description: "Print a left-aligned triangle with increasing stars",
        difficulty: "Easy",
        category: "Patterns",
        solution: `function leftAlignedIncreasingTriangle(row) {
  for (let i = 1; i <= row; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    console.log(star);
  }
}

// Output for row = 5:
// *
// **
// ***
// ****
// *****`,
      },
      {
        id: "left-aligned-decreasing-triangle",
        name: "Left Aligned Decreasing Triangle",
        description: "Print a left-aligned triangle with decreasing stars",
        difficulty: "Easy",
        category: "Patterns",
        solution: `function leftAlignedDecreasingTriangle(row) {
  for (let i = row; i >= 1; i--) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    console.log(star);
  }
}

// Output for row = 5:
// *****
// ****
// ***
// **
// *`,
      },
      {
        id: "right-aligned-increasing-triangle",
        name: "Right Aligned Increasing Triangle",
        description: "Print a right-aligned triangle with increasing stars",
        difficulty: "Easy",
        category: "Patterns",
        solution: `function rigtAlignedIncreasingTriangle(row) {
  for (let i = 1; i <= row; i++) {
    let star = "";
    let space = "";
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    for (let s = 1; s <= row - i; s++) {
      space += " ";
    }
    console.log(space + star);
  }
}

// Output for row = 5:
//     *
//    **
//   ***
//  ****
// *****`,
      },
      {
        id: "right-aligned-decreasing-triangle",
        name: "Right Aligned Decreasing Triangle",
        description: "Print a right-aligned triangle with decreasing stars",
        difficulty: "Easy",
        category: "Patterns",
        solution: `function rightAlignedDecreasingTriangle(row) {
  for (let i = row; i >= 1; i--) {
    let star = "";
    let space = "";

    for (let j = 1; j <= i; j++) {
      star += "*";
    }

    for (let s = 1; s <= row - i; s++) {
      space += " ";
    }

    console.log(space + star);
  }
}

// Output for row = 5:
// *****
//  ****
//   ***
//    **
//     *`,
      },
      {
        id: "centered-pyramid",
        name: "Centered Pyramid",
        description: "Print a centered pyramid with stars",
        difficulty: "Medium",
        category: "Patterns",
        solution: `function printCenteredPyramid(row) {
  for (let i = 1; i <= row; i++) {
    let star = "";
    let spaces = "";
    for (let s = 1; s <= row - i; s++) {
      spaces += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      star += "*";
    }
    console.log(spaces + star);
  }
}

// Output for row = 5:
//     *
//    ***
//   *****
//  *******
// *********`,
      },
      {
        id: "inverted-pyramid",
        name: "Inverted Pyramid",
        description: "Print an inverted pyramid with stars",
        difficulty: "Medium",
        category: "Patterns",
        solution: `function printInvertedPyramid(row) {
  for (let i = row; i >= 1; i--) {
    let star = "";
    let spaces = "";
    for (let s = 1; s <= row - i; s++) {
      spaces += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      star += "*";
    }
    console.log(spaces + star);
  }
}

// Output for row = 5:
// *********
//  *******
//   *****
//    ***
//     *`,
      },
      {
        id: "hollow-pyramid",
        name: "Hollow Pyramid",
        description: "Print a hollow pyramid pattern",
        difficulty: "Hard",
        category: "Patterns",
        solution: `function printHollowPyramidPattern(row) {
  for (let i = 1; i <= row; i++) {
    let star = "";
    for (let s = 1; s <= row - i; s++) {
      star += " ";
    }
    if (i === 1) {
      star += "*";
    } else if (i === row) {
      for (let j = 1; j <= 2 * i - 1; j++) {
        star += "*";
      }
    } else {
      star += "*";
      for (let space = 1; space <= 2 * i - 3; space++) {
        star += " ";
      }
      star += "*";
    }
    console.log(star);
  }
}

// Output for row= 5:
//     *
//    * *
//   *   *
//  *     *
// *********`,
      },
      {
        id: "hollow-square",
        name: "Hollow Square Pattern",
        description: "Print a hollow square with stars",
        difficulty: "Medium",
        category: "Patterns",
        solution: `function printHollowSquarePattern(row) {
  for (let i = 1; i <= row; i++) {
    let star = "";
    for (let j = 1; j <= row; j++) {
      if (i === 1 || i === row || j === 1 || j === row) {
        star += "*";
      } else {
        star += " ";
      }
    }
    console.log(star);
  }
}

// Output for row = 7:
// *******
// *     *
// *     *
// *     *
// *     *
// *     *
// *******`,
      },
      {
        id: "binary-triangle",
        name: "Binary Triangle Pattern",
        description: "Print a triangle with alternating 0s and 1s",
        difficulty: "Hard",
        category: "Patterns",
        solution: `function printAlternativeBinaryTriangle(row) {
  for (let i = 1; i <= row; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star = star + (i % 2 === 1 ? j % 2 : (j + 1) % 2);
    }
    console.log(star);
  }
}
// Output for row = 5:
// 1
// 01
// 101
// 0101
// 10101`,
      },
      {
        id: "hollow-inverted-pyramid",
        name: "Hollow Inverted Pyramid",
        description: "Print a hollow inverted pyramid pattern",
        difficulty: "Hard",
        category: "Patterns",
        solution: `function printHollowInvertedPyramidPattern(row) {
  for (let i = row; i >= 1; i--) {
    let star = "";
    for (let s = 1; s <= row - i; s++) {
      star += " ";
    }
    if (i === 1) {
      star += "*";
    } else if (i === row) {
      for (let j = 1; j <= 2 * i - 1; j++) {
        star += "*";
      }
    } else {
      star += "*";
      for (let space = 1; space <= 2 * i - 3; space++) {
        star += " ";
      }
      star += "*";
    }
    console.log(star);
  }
}

// Output for row = 5:
// *********
//  *     *
//   *   *
//    * *
//     *`,
      },
      {
        id: "butterfly-pattern",
        name: "Butterfly Pattern",
        description: "Print a butterfly pattern with stars",
        difficulty: "Hard",
        category: "Patterns",
        solution: `function printButerflyPattern(row) {
  for (let i = 1; i <= row; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    for (let s = 1; s <= 2 * (row - i); s++) {
      star += " ";
    }
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    console.log(star);
  }
  for (let i = row; i >= 1; i--) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    for (let s = 1; s <= 2 * (row - i); s++) {
      star += " ";
    }
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    console.log(star);
  }
}

// Output for row = 5:
// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *`,
      },
      {
        id: "diamond-pattern",
        name: "Diamond Pattern",
        description: "Print a diamond shape with stars",
        difficulty: "Hard",
        category: "Patterns",
        solution: `function printDimondPattern(row) {
  for (let i = 1; i <= row; i++) {
    let star = "";
    for (let s = 1; s <= row - i; s++) {
      star += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      star += "*";
    }
    console.log(star);
  }
  for (let i = row - 1; i >= 1; i--) {
    let star = "";
    for (let s = 1; s <= row - i; s++) {
      star += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      star += "*";
    }
    console.log(star);
  }
}

// Output for row = 5:
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *`,
      },
      {
        id: "multiplication-table",
        name: "Multiplication Table",
        description: "Print multiplication table for a given number",
        difficulty: "Easy",
        category: "Patterns",
        solution: `function multiplicationTable(num) {
  let result = \`Multiplication table of \${num}\\n\`;
  for (let i = 1; i <= 10; i++) {
    result += \`\${num} x \${i} = \${num * i}\\n\`;
  }
  return result;
}

// Output for num = 5:
// Multiplication table of 5
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50`,
      },
      {
        id: "multiplication-table-up-to-n",
        name: "Multiplication Tables Up to N",
        description: "Print multiplication tables from 1 to N",
        difficulty: "Medium",
        category: "Patterns",
        solution: `function multiplicationTablesUptoN(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += \`\\nMultiplication table of \${i}:\\n\`;
    for (let j = 1; j <= 10; j++) {
      result += \`\${i} x \${j} = \${i * j}\\n\`;
    }
  }
  return result;
}

// Output for num = 3:
// Multiplication table of 1:
// 1 x 1 = 1
// 1 x 2 = 2
// ...
// Multiplication table of 2:
// 2 x 1 = 2
// 2 x 2 = 4
// ...`,
      },
    ],
  },
];
