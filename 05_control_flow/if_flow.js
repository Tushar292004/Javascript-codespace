const userLoggedIn = true 
const debitCard = true 
if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy");
}else {
    console.log("Not found");
}

const loggedInFromGoogle = true ;
const loggedInFromEmail = false ;

if( loggedInFromEmail || loggedInFromGoogle){
    console.log('User is Logged In');
}

const userEmail = [] ;  //truthy value 
if (userEmail) {
    console.log(userEmail);
} else {
    console.log("Email Not Found");
}

//Falsy Values
// false, 0, -0, BigInt - 0n, "", null, undefined, nan

//Truthy Values 
// other all are truthy value : "0", 'false', " " [with space string], [] [Empty array], {} [Empty Object], function (){} [Empty Function]

if (userEmail.length === 0){
    console.log("Array is empty");
}

userName = {} ;
if (Object.keys(userName).length === 0) {
    console.log("Empty Object");
}

// false == 0 : true 
// false == '' : true
// 0 == '' : true

//Nullish Coalescing Operator (??) : null undefined
let val1 ;
val1  = 5 ?? 10 
console.log(val1);
val1 = null ?? 10; // null got eliminated (safety check used for databases)
console.log(val1);
val1 = undefined ?? 15 ; // undefined got eliminated 
console.log(val1);
val1 = null ?? 10 ?? 15; //1st value will be assign 
console.log(val1);

// Terniary Operator 
// condition ? true : false 
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Cheap") : console.log("Costly");