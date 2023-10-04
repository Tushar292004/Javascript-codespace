const score = 401.894 ; 
const no  = Number(100) ; 

//Number Methods
console.log(no.toString().length);
console.log(no.toFixed(2)); // 100.00
console.log(score.toPrecision(4)); 

const zero = 1000000 ;
console.log(zero.toLocaleString()); //by default us standards
console.log(zero.toLocaleString('en-IN')); //indian standards

//Maths 
console.log(Math.abs(-4));
console.log(Math.round(4.9));
console.log(Math.ceil(4.5));
console.log(Math.floor(4.5));
console.log(Math.sqrt(16));
console.log(Math.pow(3, 2));
console.log(Math.min(...[7 , -1]));
console.log(Math.max(7 , 10 , 5));
console.log(Math.max([...'hello']));
console.log(Math.random()); // IT WILL BE BTWN 0 - 1
console.log(Math.round((Math.random()*10)+1)); // non zero

const min = 1 ; 
const max =  6 ; 
console.log(`Dice Value : ${Math.floor(Math.random() * (max - min + 1)) + min}`);  // die value generator 