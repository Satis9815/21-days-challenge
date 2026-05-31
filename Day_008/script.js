// 1.Reverse a String (Manual Method Only)
// Input: "javascript"
// Output: "tpircsavaj" ✨ Use a loop — no .reverse().

function reverseString(str) {
  let temp = "";
  for (let i = str.length - 1; i >= 0; i--) {
    temp += str[i];
  }

  return temp;
}

// console.log(reverseString('javascript'))

// 2.Check if a String is a Palindrome
// Input: "racecar"
// Output: Palindrome ✨ Compare characters from both ends using two-pointer logic.

// Way 1
function stringIsPalindrome(str) {
  const orginalStr = str;
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return orginalStr === reversedStr;
}

// console.log(stringIsPalindrome(('haah')))

// Way 2
function isPalindrome(str) {
  let leftIndex = 0;
  let rightIndex = str.length - 1;

  while (leftIndex < rightIndex) {
    if (str[leftIndex] !== str[rightIndex]) return false;

    leftIndex++;
    rightIndex--;
  }
  return true;
}

// console.log(isPalindrome("haah"))

// 3.Count Frequency of Each Character
// Input: "banana"
// Output: { b:1, a:3, n:2 } ✨ Teaches hash maps / JS objects + iteration.

function countCharacter(str) {
  let obj = {};
  for (let i = 0; i <= str.length - 1; i++) {
    obj[str[i]] = obj[str[i]] + 1 || 1;
  }
  return obj;
}
// console.log(countCharacter('hellloo'));

// 4.Find the Most Frequent Character in a String
// Input: "success"
// Output: Most frequent: s (3 times) ✨ Builds on frequency map — find maximum occurrence.
function countMaxFrequencyCharacter(str) {
  let obj = {};
  let maxChar = "";
  let maxCount = 0;
  for (let i = 0; i <= str.length - 1; i++) {
    let char = str[i];
    obj[char] = obj[char] + 1 || 1;
    if (maxCount < obj[char]) {
      maxChar = char;
      maxCount = obj[char];
    }
  }
  return maxChar;
}
// console.log(countMaxFrequencyCharacter("hellloooo"));

// 5.Check if Two Strings Are Anagrams (Without Sorting)
// Input: "listen", "silent"
// Output: Anagram ✨ Use character frequency comparison — no .sort().

function checkStringsAreAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let obj = {};
  for (let i = 0; i < str1.length; i++) {
    obj[str1[i]] = obj[str1[i]] + 1 || 1;
  }
  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!obj[char]) return false;
    obj[char]--;
  }
  return true;
}

// console.log(checkStringsAreAnagram('race','care'));

// 6.Find the First Non-Repeating Character
// Input: "aabbcddeff"
// Output: c ✨ Requires 2-pass algorithm: first count → then find first unique.

function findFirstNonRepeatingCharacter(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    obj[str[i]] = obj[str[i]] + 1 || 1;
  }
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === 1) return str[i];
  }
  return null;
}

// console.log(findFirstNonRepeatingCharacter("banjanijab"))

// 7. Remove All Duplicate Characters (Keep First Occurrence)
// Input: "programming"
// Output: "progamin" ✨ Use a visited set + build new string.

function removeDuplicateCharacterFromString(str) {
  let obj = {};
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    obj[char] = obj[char] + 1 || 1;

    if (obj[char] === 1) {
      newStr += char;
    }
  }
  return newStr;
}
// console.log(removeDuplicateCharacterFromString("programming"));

// 8. Check if a String Contains Only Alphabets (No Regex)
// Input: "HelloWorld123"
// Output: False ✨ Use ASCII ranges manually.

function checkStringContainsOnlyAlphabets(str) {
  if (str.length === 0) return false;
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    const isUpperCase = charCode >= 65 && charCode <= 90;
    const isLowerCase = charCode >= 97 && charCode <= 122;

    if (!isUpperCase && !isLowerCase) { 
      return false;
    }
  }
  return true;
}

// console.log(checkStringContainsOnlyAlphabets("Hello"));

// 9. Reverse Only the Words in a Sentence
// Input: "I love coding"
// Output: "coding love I" ✨ Split manually or build reverser yourself.

function reverseWordsInString(scentence) {}

// 10. Find the Longest Word in a Sentence
// Input: "coding is beautiful"
// Output: "beautiful" ✨ Manual scanning + longest tracking.

// 11. Count the Number of Words (Manually Without split)
// Input: "  hi   there  world "
// Output: 3 words ✨ Detect transitions from space → non-space using logic.

// 12. Find All Substrings of a String (No Built-ins)
// Input: "abc"
// Output: a, ab, abc, b, bc, c ✨ Nested loops + substring construction.

// 13. Compress a String (Basic Run-Length Encoding)
// Input: "aaabbccccd"
// Output: "a3b2c4d1" ✨ Count consecutive characters and build encoded output.
