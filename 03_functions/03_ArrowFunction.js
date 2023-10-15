//This : tells us about the current context 

const user = {
    username: "tushar", // these are current context inside the block / same scope 
    price: 999,
    welcomeMeassage : function() {
        console.log(`Hello ${this.username} welcome to the website`)
        console.log(this);  // it will return this whole object
    }
}
 
user.welcomeMeassage() 
user["username"] = "Sam" // current context changed 
user.welcomeMeassage()
console.log(this); // it will return the empty object 

// // NOTE
// function chai () {
//     let username  = "tushar"
//     console.log(this.username);
// }
// chai()  // this will return undefined

const chai = () => {
    let username  = "tushar"
    console.log(this.username); 
}

chai() // return undefined 


// Implicit Return 
const addTwo = (num1, num2) => num1 + num2 ;
console.log(addTwo(4,4))

// Explicit Return 
const addThree = (n1,n2,n3) =>
    {
        return (n1+n2+n3)
     }
    ; 
console.log(addThree(5,6,7));

// for object we have to use curly braces always