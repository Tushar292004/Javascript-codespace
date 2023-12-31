"use strict" ;  //treats all JS code as newr version 

/*  PRIMITIVE DATAYPES 
number => 2 to power 53
bigint
string => '' or ""
boolean => true or flase 
null => standalone value 
undefined => not assigned a value yet
symbol (new in ES6) =>  used for uniqueness

    NON PRIMITIVE DATA TYPE 
object => { }
array => [ ]
function
*/

const rollNo  = 14.00;  // number 
let studentName = "Tushar" //String 

const id = Symbol("123") ;
const id2 = Symbol("123") ;
console.log(id === id2);  // false :  return value is not same because symbol are uniques 

console.log(typeof rollNo);   
//typeof is used to get the datatyp of the variable 

// NOTE : null is in Object and undefined is its own type 