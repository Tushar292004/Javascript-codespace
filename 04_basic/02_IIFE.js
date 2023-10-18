// Immediately Invoked Function Expressions (IIFE)
// It is used to handel or prevent the pollution caused by any global scope entity inside a function 

//named IIFE
(function chai() {
    console.log("Chai");
} ) () ;

//unnamed IIFE
(( name ) => {
    console.log(`Hello ${name}`);
} ) ('Tushar') ;

// 1st () : defination  2nd() : execution call , " ; " this is needed to end the IIFE 
