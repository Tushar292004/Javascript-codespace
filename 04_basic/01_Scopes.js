
// { } this is scope
// eyerthing written outside here is Global scope
let a = 40
const b = 30
if (true) {
    //everthing inside this is block scope
    let a = 10 
    console.log(a);
    const b = 20
    console.log(b);
    // var c = 30  worst 
}
console.log(a); 
console.log(b);


// nested function 
function one() {
    const username = "Tushar"
    function  two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

// 
const addTwo = function(num) {
    return num + 2;
}
addTwo(5)

// Hoisting  is a Js Concept 