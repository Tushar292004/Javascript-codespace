// defining function

// here a and b are parameters
function myFunction(a, b) {
   return `Sum of ${a} and ${b} is ${a + b}`; 
   // after this code will be unreachable 
}
//function execution / reference is : myFunctoion
const result  = myFunction(3, 5) // here 3 , 5 are arguments  
console.log(result);

//NOTES
// **Basic Syntax:**
// One of which is to use the function keyword.

// function  numberAdd(a, b) {
//     const sum = a + b;
//     return sum;
// }
// console.log(numberAdd(3, 4)); // 7

// **Anonymous Function**
// You can optionally exclude the name of the function after the function keyword.

// var numberAdd = function(a, b) {
//     const sum = a + b;
//     return sum;
// }
// console.log(numberAdd(3, 4)); // 7

// **Immediately Invoked Function Expression (IIFE)**
// You can create a function and immediately execute it in Javascript.
// Why would you write code like this? It gives you the opportunity to encapsulate a variable within a new scope. For example, another developer can immediately see that sum can't be used anywhere outside the function body.

// const result = (function(a, b) {
//     const sum = a + b;
//     return sum;
// })(3, 4);
// console.log(result); // 7

// **Function Hoisting**
// JavaScript has a feature called hoisting where a function can sometimes be used before it is initialized. You can only do this if you declare functions with the function syntax. Anonymous function, Arrow functions will not support hoisting.

// function createFunction() {
//     return f;
//     function f(a, b) {
//         const sum = a + b;
//         return sum;
//     }
// }
// const f = createFunction();
// console.log(f(3, 4)); // 7

// **Closures**
// An important topic in JavaScript is the concept of closures. When a function is created, it has access to a reference to all the variables declared around it, also known as it's lexical environment. The combination of the function and its enviroment is called a closure. This is a powerful and often used feature of the language.

// function createAdder(a) {
//     function f(b) {
//         const sum = a + b;
//         return sum;
//     }
//     return f;
// }
// const f = createAdder(3);
// console.log(f(4)); // 7

// **Arrow Syntax**
// The other common way to declare functions is with arrow syntax. In fact, on many projects, it is the preferred syntax.

// const f = (a, b) => {
//     const sum = a + b;
//     return sum;
// };
// console.log(f(3, 4)); // 7

// **Omit Return**
// If you can write the code in a single line, you can omit the return keyword. This can result in very short code.

// const f = (a, b) => a + b;
// console.log(f(3, 4)); // 7