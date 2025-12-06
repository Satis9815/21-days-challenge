# JavaScript Loop & Math Practice — Solutions with Examples

## 1. Print Numbers from 1 to N
**Question:** Print numbers from 1 to N.  
**Example:** If N = 5 → Output: 1 2 3 4 5

```js
const num = 20;
for (let i = 1; i <= num; i++) {
    console.log(i);
}
```

---

## 2. Print Numbers from N to 1 (Using Same Loop Logic as Q1)
**Question:** Print numbers from N → 1 without changing the loop structure.  
**Example:** If N = 5 → Output: 5 4 3 2 1

```js
const num = 20;
for (let i = 1; i <= num; i++) {
    console.log(num - (i - 1));
}
```

---

## 3. Print All Even Numbers from 1 to N
**Example:** If N = 10 → Output: 2 4 6 8 10

```js
const num = 20;
for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
        console.log("Even Number:", i);
    }
}
```

---

## 4. Sum of N Natural Numbers
### Brute Force Method
```js
console.time();
const num = 10000;
let sum = 0;

for (let i = 1; i <= num; i++) {
    sum += i;
}

console.log(sum);
console.timeEnd();
```

### Optimized Formula Method
Uses formula: **sum = n(n+1)/2**

```js
console.time();
const num = 1000000000000;
let sum = (num * (num + 1)) / 2;

console.log(sum);
console.timeEnd();
```

---

## 5. Factorial of N
**Example:** 5! = 120

```js
const num = 5;
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
}

console.log(factorial);
```

---

## 6. Sum of All Even Numbers up to N
### Method 1: Loop Method
```js
console.time();
const num = 20;
let sum = 0;
for(let i = 0; i <=num;i++){
    if(i%2===0){
        sum +=i;
    }
}
console.log(sum)
console.timeEnd();
```

### Method 2: Formula  
Sum of first k even numbers = **k × (k + 1)**  
Where **k = N/2**

```js
console.time();
const num = 20;

let k = Math.floor(num / 2);
let sum = k * (k + 1);

console.log("k:", k);
console.log(sum);
console.timeEnd();
```

---

## 7. Print Squares of Numbers from 1 to N
**Example:** N = 5 → 1 4 9 16 25

```js
const num = 10;

for (let i = 1; i <= num; i++) {
    console.log(i * i);
}
```

---

## 8. Print All Numbers Divisible by BOTH 3 and 5
**Example:** Up to 30 → 15, 30

```js
const num = 30;

for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}
```

---

## 9. Sum of All Odd Numbers up to N  
### Method 1: Manual Listing
```js
const num = 10;
console.log(1 + 3 + 5 + 7 + 9);
```

### Method 2: Formula  
Sum of first k odd numbers = **k²**, where **k = ceil(N/2)**

```js
const num = 10;

let sum = Math.ceil(num / 2) ** 2;

console.log(sum);
```

---

## 10. Print Cubes of Numbers from 1 to N
```js
const num = 5;

for (let i = 1; i <= num; i++) {
    console.log(i ** 3);
}
```

---

## 11. Print Only Numbers That Are Even Perfect Squares
**Example:** Up to 20 → Output: 4, 16

```js
const num = 20;

for (let i = 1; i * i <= num; i++) {
    const square = i * i;

    if (square % 2 === 0) {
        console.log(square);
    }
}
```

---
