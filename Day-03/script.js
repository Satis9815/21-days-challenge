//1.Left Aligned Increasing Triangle
function leftAlignedIncreasingTriangle(row) {
  for (let i = 1; i <= row; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    console.log(star);
  }
}
// leftAlignedIncreasingTriangle(5)

//2. Left Aligned Decreasing Triangle
function leftAlignedDecreasingTriangle(row) {
  for (let i = row; i >= 1; i--) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star += "*";
    }
    console.log(star);
  }
}
// leftAlignedDecreasingTriangle(7)

//3.Right Aligned Increasing Triangle
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
// rigtAlignedIncreasingTriangle(5);

//4.Right Aligned Decreasing Triangle

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

// rightAlignedDecreasingTriangle(5);

//5.Simple Centered Pyramid
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
// printCenteredPyramid(5)

//6.Inverted Pyramid
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
// printInvertedPyramid(8);

// 7. Print Hollow Pyramid Pattern
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
// printHollowPyramidPattern(5);

// 8. Print Hollow Square Pattern
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
// printHollowSquarePattern(7);

// 9. Print Alternative Binary Triangle
function printAlternativeBinaryTriangle(row){
    for(let i = 1; i<=row; i++){
        let star="";
        for(let j = 1; j<=i;j++){
           star = star + (i%2===1 ? j%2 : (j+1)%2);
        }
        console.log(star);
    }
}
// printAlternativeBinaryTriangle(5)

// 10. Print Hollow Inverted Pyramid 
function printHollowInvertedPyramidPattern(row) {
  for (let i = row; i >=1; i--) {
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
printHollowInvertedPyramidPattern(8)
// 11. Print Butterfly Pattern
// 12. Print Dimond Pattern
// 13. Print Hourglass Pattern
// 14. Print Hollow Dimond Pattern
// 15. Print Rhombus Pattern
// 16. Print Multiplication table
