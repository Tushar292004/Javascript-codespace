// singelton (Constructor method)

// not singlton (Object Litreals)
const mySymbol = Symbol(19)

const jsUser = {
      name: "Tushar",
      email: "tusahrchanddaqk@gmail.com",
      "fullname" : "Tushar Chandak", 
      age: 19 ,
      isLoggedIn: false,
      lastLoginDay: ["Monday", "Saturday"],
      [mySymbol] : 19   //palce in square braces for symbol 
    };

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["fullname"]);

console.log(jsUser[mySymbol] ,typeof mySymbol);

jsUser.isLoggedIn = "true";
console.log(jsUser.isLoggedIn);

// Object.freeze(jsUser) stops from any updation further 
jsUser.isLoggedIn  = "false" ; 
console.log(jsUser);


// Object.seal(jsUser) prevents addtion or deletion of any new properties
jsUser.greeting = function(){
    console.log(`Hello, ${this.name}`);
}
console.log(jsUser.greeting());