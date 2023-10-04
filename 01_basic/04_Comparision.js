// Basic comparision
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 != 1);
// console.log(2 < 1);

// Convertable Conversion
console.log("2" > 1);
console.log("02" > 1);   // data type should be same keep in mind 

// Null comparision
console.log(null > 0); //null is empty value so false 
// console.log('' > null)    this will give error because of string is not a number so it can't compare with other numbers
console.log(null >= 0); // but it is greater then 0
console.log(null == 0); // false 
 
console.log(undefined > 1); // always false 

// ==  is the loose check it will convert and check 
// === is the strict checky it will check the data type also it will not convert 

// console.log("abc" > "def"); false