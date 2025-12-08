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
];
