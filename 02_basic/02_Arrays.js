const marvelHeros = ["Thor", "Ironman", "Spiderman"]
const dcHeros  = ["Flash","Superman","Batman"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros, marvelHeros.length);

const combine = marvelHeros.concat(dcHeros);
console.log(combine); 
// concat returns a new array 

const newCombine = [...marvelHeros, ...dcHeros]
console.log(newCombine); // spread operator 

// flat method
const anotherArr = [1,2,3,[4,5,6],7,[8,9,[4,5]]]
const anotherArr_Usable = anotherArr.flat(Infinity)
console.log(anotherArr_Usable);

//used in data scrapping from websites
console.log(Array.isArray("TUSHAR"));
console.log(Array.from("TUSHAR")); // array convertor
console.log(Array.from({name : "Tushar", age : 18})); //not possible we have to define it 

let score = 100
let score1 = 200
let score2 = 300

// console.log(Array.from(score, score1 ,score2));  not possible only single argument 
console.log(Array.of(score1 , score2, score));