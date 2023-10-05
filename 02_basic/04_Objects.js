//destructuring 

const course = {
    courseName : "React",
    price : "999",
    courseTeacher : "Tushar"
}

// this is destructuring : syntax ({}) curly braces
const {courseTeacher: Teacher} = course
console.log(Teacher);

// API : Application Program Interface 
// JSON is Object of Object : Both key and value is string
// {
//     "name" : "Tushar",
//     "courseName" : "REACT",
//     "price" : "Free"
// }


// We get apis in object and array format
// example api : random user me  [{}, {}, {}]
// tools :  json formater 