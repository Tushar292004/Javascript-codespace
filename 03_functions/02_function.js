// spread operator with function is know as rest operator 
function myFunction(n1 ,n2 ,...num) {
    return num
}
console.log(myFunction(10,20,30,40));


// function with object
const user  = {
    name : "Tushar",
    age : 19
}
function objectHandel (anyObject) {
    console.log(`Username is ${anyObject.name} and age is ${anyObject.age}`);
}
objectHandel(user);

//function(user)
objectHandel({
    name: "Tushar",
    age: 99
})