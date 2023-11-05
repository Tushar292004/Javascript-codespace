//for loop 
// for (let index = 0; index < array.length; index++) {
//    console.log(array[index]);   
// }

//break & continue
const array = [1,4,5,7,0,9]
for (let index = 0; index < array.length; index++) {
    if (array[index] == 0) {
        break ;
    }
    else if (array[index] == 5){
        continue ;
    }
    console.log(array[index]);
}