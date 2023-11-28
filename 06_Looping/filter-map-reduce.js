//fitlers the data from an array by returning them in a array of output elements
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newNums = myNum.filter((num) => {
  return num > 5;
});
console.log(newNums);

//similar execution with forEach
const newNum = [];
myNum.forEach((num) => {
  if (num > 5) {
    newNum.push(num);
  }
});
console.log(newNum);

//EXAMPLE
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const userBooks = books.filter((bookFiltered) => {
  return bookFiltered.genre === "History" && bookFiltered.publish >= 1986;
});
console.log(userBooks);

//map
const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myNumber.map((num) => {
  return num + 10;
});
console.log(myNumber);

//chaining method
const myNumbers = myNumber
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 60);
console.log(myNumbers);
