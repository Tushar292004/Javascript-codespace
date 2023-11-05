const userLoggedIn = true 
const debitCard = true 
if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy");
}else {
    console.log("Not found");
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