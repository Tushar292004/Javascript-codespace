const stringName = new String("Tushar") ;

console.log(stringName[0]);
console.log(stringName.__proto__);

console.log(stringName.length);
console.log(stringName.charAt(4));
console.log(stringName.indexOf('r'));

console.log(stringName.slice(-1)); //last element 

const newString = stringName.substring(0, 4);
console.log(newString);

const newString1 = "  tushar  " ;
console.log(newString1.length);
console.log(newString1.trim().length); 

const url = "https://tushar.com/tushar%20chandak" ; 
console.log(url.replace('%20', '-'));
console.log(url.includes('tushar'));

const name = "Tushar-Jitendra-Sangeeta" ; 
console.log(name.split('-')) ;
const lastName = name.split('') ;
console.log(lastName.slice(-1));
