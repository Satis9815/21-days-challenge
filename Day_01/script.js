//1.Print Number from 1 to N

// const num1 = 20;
// for(let i = 1; i <= num1 ; i++){
//     console.log(i)
// }

//2.Print Numbers N to 1 without changing the loop of Q1.
// const num2 = 20;
// for(let i = 1; i <= num2 ; i++){
//     console.log(num2-(i-1))
// }

// 3.Print All Even number from 1 to N
// const num=20;
// for(let i = 1;i<=num;i++){
//     if(i%2==0){
//         console.log("Even Number",i);
//     }
// }

// 4.Sum of N Natural numbers

//Brute force solution

// console.time();
// const num = 10000;-> 
// let sum = 0;
// for(let i = 1;i<=num;i++){
//     sum = sum + i
// }
// console.log(sum);
// console.timeEnd()

// console.time();
// const num = 1000000000000;
// let sum = 0;
// sum = (num * (num + 1)) / 2;
// console.log(sum);
// console.timeEnd();

// 5. Factorial of N number
// const num = 5;
// let factorial = 1;
// for(let i = 1; i <=num; i ++){
//     factorial *=i 
// }
// console.log(factorial);

// 6.Sum of All Even number up to N

// console.time();
// const num = 20;
// let sum = 0;
// for(let i = 0; i <=num;i++){
//     if(i%2===0){
//         sum +=i;
//     }
// }
// const k = Math.floor(num / 2);  
// console.log("k",k);
//  sum = k * (k + 1);
// console.log(sum);
// console.timeEnd();

// 7. Print squares of numbers upto 1 to N 
// const num = 10;
// for(let i = 1; i <=num;i++){
//     console.log(i*i);
// }

// 8. Print All numbers divisible by 3 or 5 up to N 
// const num = 30;
// for(i = 1; i <= num; i++){
//     if(i%3 === 0 && i %5===0){
//         console.log(i);
//     }
// }

// 9. Find the sum of all odd number up to N
// const num = 10;
// console.log(1+3+5+7+9)
// let sum = 0;
// // for(i = 1; i <=num ; i ++){
// //     if(i % 2===1){
// //         sum +=i;
// //     }
// // }

// sum = Math.ceil(num/2)**2
// console.log(sum)

// 10. Print the cube of numbers from 1 to N
// const num = 5;
// for(let i = 1; i <=num; i++){
//     // console.log(i**3);
//     // console.log(i*i*i)
// }

// 11. Print Only the numbers that are both even and perfect sqares
// const num  = 20;
// for(let i = 1; i*i <= num; i++){
//     const square = i * i;
//     if(square %2 ===0){
//         console.log(i);
//     }
// }