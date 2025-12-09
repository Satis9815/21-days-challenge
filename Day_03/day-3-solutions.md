# ⭐ Star Pattern & Table Practice Solutions with Examples

---

## 1. Print a left-aligned triangle where stars increase row by row.

### Example (Input: 5)

### Output:

    *
    **
    ***
    ****
    *****

```js
function leftAlignedIncreasingTriangle(row) {
  for (let i = 1; i <= row; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    console.log(star);
  }
}
leftAlignedIncreasingTriangle(5);
```

---

## 2. Print a left-aligned triangle where stars decrease row by row.

### Example (Input: 5)

### Output:

    *****
    ****
    ***
    **
    *

```js
function leftAlignedDecreasingTriangle(row) {
  for (let i = row; i >= 1; i--) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    console.log(star);
  }
}
leftAlignedDecreasingTriangle(5);
```

---

## 3. Print a right-aligned triangle where stars increase upward.

### Example (Input: 5)

### Output:

        *
       **
      ***
     ****
    *****

```js
function rigtAlignedIncreasingTriangle(row) {
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
rigtAlignedIncreasingTriangle(5);
```

---

## 4. Print a right-aligned triangle where stars decrease downward.

### Example (Input: 5)

### Output:

    *****
     ****
      ***
       **
        *

```js
function rightAlignedDecreasingTriangle(row) {
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
rightAlignedDecreasingTriangle(5);
```

---

## 5. Print a centered pyramid symbol pattern.

### Example (Input: 5)

### Output:

        *
       ***
      *****
     *******
    *********

```js
function printCenteredPyramid(row) {
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
printCenteredPyramid(5);
```

---

## 6. Print an upside-down centered pyramid.

### Example (Input: 5)

### Output:

    *********
     *******
      *****
       ***
        *

```js
function printInvertedPyramid(row) {
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
printInvertedPyramid(5);
```

---

## 7. Print a pyramid with only boundary stars.

### Example (Input: 5)

### Output:

        *
       * *
      *   *
     *     *
    *********

```js
function printHollowPyramidPattern(row) {
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
printHollowPyramidPattern(5);
```

---

## 8. Print a hollow square using stars.

### Example (Input: 5)

### Output:

    *****
    *   *
    *   *
    *   *
    *****

```js
function printHollowSquarePattern(row) {
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
printHollowSquarePattern(5);
```

---

## 9. Print a binary pattern triangle with alternating values.

### Example (Input: 5)

### Output:

    1
    01
    101
    0101
    10101

```js
function printAlternativeBinaryTriangle(row) {
  for (let i = 1; i <= row; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star = star + (i % 2 === 1 ? j % 2 : (j + 1) % 2);
    }
    console.log(star);
  }
}
printAlternativeBinaryTriangle(5);
```

---

## 10. Print an inverted hollow pyramid.

### Example (Input: 5)

### Output:

    *********
     *     *
      *   *
       * *
        *

```js
function printHollowInvertedPyramidPattern(row) {
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
printHollowInvertedPyramidPattern(5);
```

---

## 11. Print a butterfly star pattern.

### Example (Input: 5)

### Output:

    *        *
    **      **
    ***    ***
    ****  ****
    **********
    **********
    ****  ****
    ***    ***
    **      **
    *        *

```js
function printButerflyPattern(row) {
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
printButerflyPattern(10);
```

---

## 12. Print a symmetric diamond star pattern.

### Example (Input: 5)

### Output:

        *
       ***
      *****
     *******
    *********
     *******
      *****
       ***
        *

```js
function printDimondPattern(row) {
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
printDimondPattern(5);
```

---

## 13. Print an hourglass-shaped star pattern.

---

## 14. Print a diamond with hollow space inside.

---

## 15. Print a slanted parallelogram using stars.

---

## 16. Print the multiplication table of a given number.

### Example (Input: 5)

### Output:

    5 x 1 = 5
    5 x 2 = 10
    5 x 3 = 15
    ...
    5 x 10 = 50

```js
function printMultiplicationTable(num) {
  console.log(`Ther multiplication table of ${num}`);
  for (i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}
printMultiplicationTable(5);
```

---

## 17. Print multiplication tables from **1 to N**.

### Example (Input: 3)

### Output:

    1 x 1 = 1
    ...
    1 x 10 = 10
    ----------
    2 x 1 = 2
    ...
    2 x 10 = 20
    ----------
    3 x 1 = 3
    ...
    3 x 10 = 30

```js
function printMultiplicationTableUptoN(num) {
  console.log("The multiplication table upto", num);
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("----------");
  }
}
printMultiplicationTableUptoN(3);
```

---

**Tip:** Practice each pattern using nested loops and understand how
**spaces and stars** are controlled in each case.

🔥 Happy Coding!
