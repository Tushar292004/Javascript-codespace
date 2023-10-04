// DATES

let myDate = new Date() ;
console.log(myDate);
console.log(typeof myDate); //object
console.log(myDate.toString()); 
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let customDate = new Date(2023, 0, 23);
let customDate2 = new Date("01-14-2023");
console.log(customDate2.getTime());

console.log(customDate2.toLocaleString())
console.log(customDate.toDateString());

let timeStamp = Date.now() ; 
console.log(timeStamp + " milliseconds");
console.log(Math.floor(Date.now()/1000) + " seconds");

let newDate  = new Date() ; 
console.log(newDate);
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default', {
    weekday: "long"
})   // customization