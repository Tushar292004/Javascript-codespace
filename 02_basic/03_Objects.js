// not singlton (Object Litreals)
const mySymbol = Symbol(19)

const jsUser = {
      name: "Tushar",
      email: "tusahrchandak@gmail.com",
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


// singelton (Constructor method)
const tinderUser = new Object() ;
tinderUser.userId = "42612040";
tinderUser.name = "Tushar" ; 
tinderUser.fullname = {firstname: "Tushar", lastname: "Chandak"} ;
console.log(tinderUser);

const user = Object.assign({} , jsUser , tinderUser)
console.log(user);

//spread operator way
const obj1 = {3 : "c", 4: "d"}
const obj2 =  {1: "a", 2: "b"}
const obj = {...obj2 ,...obj1}
console.log(obj);

console.log(Object.keys(user));  // returns an array 
console.log(Object.entries(user)); 
console.log(user.hasOwnProperty('isLoggedIn')); // returns boolean