// Sample of high oreder array loops in JS

// for-of 
const arr = [1,2,3,4,5] ;
for (const i of arr) {
    console.log(i);
}

// Maps  : always have unique values and not iterable for-in will not work
const map = new Map()
map.set('name', 'John')
map.set('age', 30)
map.set('name', 'John')
console.log(map)

for (const [iterator, value] of map) {
    console.log(iterator, " :- ", value);
}

// for-in 
const obj1 = {
    js: "javascript",
    py: "python",
    cpp: "c++"
}
for (const key in obj1) {
    console.log(key , " : ", obj1[key]);
}

//for each  uses call back func which i dont have name 
let array = ['a','b','c'];
array.forEach((value, index)=>{
    console.log(`${index}: ${value}`);
})

let array2 = [1,2,3,4,5]
function print(i){
    console.log(i);
}
array2.forEach(print); // just giving the refference of function not executing it 
//reference means {functionName} executing means {functionName()} 

const myCoding = [
 {
    langName : "JavaScript",
    saveFile : "js"
 },
 {
    langName : "Python",
    saveFile : "py"
 },
 {
    langName : "Java",
    saveFile : "java"
 }   
]
myCoding.forEach((item) => {
    console.log(item, item.langName, item.saveFile);
})