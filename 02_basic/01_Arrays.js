const myArr = ["TUSHAR", "NISHA" , "DIMPLE"]

const myArr2 = new Array(0 ,1 ,3,2 ,4) 
console.log(myArr2);

myArr2.push(5)
console.log(myArr2);

myArr2.pop()
console.log(myArr2);

myArr2.unshift(-1)
console.log(myArr2);

myArr2.shift()
console.log(myArr2);

console.log(myArr2.includes(6)); 
console.log(myArr2.indexOf(5)); //-1 means not exist

const arrNew = myArr2.join();
console.log(arrNew +" : Type is " + typeof arrNew);
console.log(myArr2);

// slice splice
console.log("A ", myArr2);
const arrNew2 = myArr2.slice(1, 4)
console.log(arrNew2);

console.log("B ", myArr2);
const arrNew3 = myArr2.splice(1,4) 
// values shits from original to splice one 

console.log("C ", myArr2);
console.log(arrNew3);