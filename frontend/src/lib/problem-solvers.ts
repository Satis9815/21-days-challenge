
export function maxOfThreeNumber(x: number, y: number, z: number): number {
  if (x >= y && x >= z) return x
  if (y >= z) return y
  return z
}

export function checkIsNumberPositiveNegativeOrZero(num: number): string {
  if (num === 0) return "Zero"
  if (num < 0) return "Negative"
  return "Positive"
}

export function calculateElectricityBill(units: number): number {
  if (typeof units !== "number" || !isFinite(units) || units < 0) {
    throw new Error("units must be a non-negative finite number")
  }

  let total = 0
  if (units <= 20) {
    total = units * 4
  } else if (units <= 30) {
    total = 20 * 4 + (units - 20) * 6.5
  } else if (units <= 50) {
    total = 20 * 4 + 10 * 6.5 + (units - 30) * 8
  } else {
    total = 20 * 4 + 10 * 6.5 + 20 * 8 + (units - 50) * 10
  }
  return total
}

export function checkVowelOrConsonant(letter: string): string {
  if (typeof letter !== "string" || letter.length !== 1) {
    return "Please provide a valid character of length 1."
  }
  const vowels = "aeiouAEIOU"
  return vowels.includes(letter) ? "Vowel" : "Consonant"
}

export function checkLeapYear(year: number): boolean {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
}

export function checkCharacterType(char: string): string {
  if (typeof char !== "string" || char.length !== 1) {
    return "Please provide a single valid character."
  }
  if (/[A-Z]/.test(char)) return "Uppercase Letter"
  if (/[a-z]/.test(char)) return "Lowercase Letter"
  if (/[0-9]/.test(char)) return "Digit"
  return "Special Character"
}

export function calculateIncomeTax(income: number): number {
  let tax = 0
  if (income <= 250000) {
    tax = 0
  } else if (income <= 500000) {
    tax = (income - 250000) * 0.05
  } else if (income <= 1000000) {
    tax = 250000 * 0.05 + (income - 500000) * 0.2
  } else {
    tax = 250000 * 0.05 + 500000 * 0.2 + (income - 1000000) * 0.3
  }
  return tax
}
