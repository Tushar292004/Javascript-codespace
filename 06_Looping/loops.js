//for loop 
const array1 = [1,2,3,4,5]
for (let index = 0; index < array1.length; index++) {
   console.log(array1[index]);   
}

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

//while   
let index = 0;
while (index < 5) {
    console.log("Hayee");
    index ++ ;
}

//Do While  :  least 1 execution 
do {
    console.log('Hello');
    index ++ ;
}
while (index < 0)
