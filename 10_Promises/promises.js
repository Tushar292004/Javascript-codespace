// fetch("https://something.com").then().catch().finally();  


//syntax type 1
const promise1 = new Promise(function (resolve, reject) {
    //Do an asyn tasks like :  DataBase Calls. cryptography, network calls
    setTimeout(function () {
        console.log('Asycn task is completed');
        resolve()
    }, 1000)
})

// consuming the promise 
promise1.then(function () {
    console.log("Promise Consumed");
})


//syntax type 2
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Asycn 2');
        resolve()
    }, 1000)
}).then(function () {
    console.log('Asycn 2 resolved');
})


// getting the data from resolve function in then function 
const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: 'Tushar', email: 'tusharkot@gmail.com' });
    }, 1000)
})

promise3.then(function (user) {
    console.log(user.username + " - " + user.email);
})



// catching the promise4 using .then .catch 
const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false //true
        if (!error) { resolve({ username: 'Tushar', password: 'tusharkot' }) }

        else { reject('Error Occured') }
    }, 1000)
})

promise4
    .then((user) => {
        console.log(user.username + ' - ' + user.password);
        return (user.username)
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => {
        console.log('Promise is either resolved or rejected');
    })


//handling the promise directly from asycn await method we cannot handel error here 
const promise5 = new Promise(function (resolve, rejected) {
    setTimeout(function () {
        let error = false //true
        if (!error) {
            resolve({ username: 'Hitesh', password: 'Hiteshkot' }) }

        else { reject('ERROR : Js went wrong') }
    }, 1000)
})

async function consumePromiseFive (){
    const response = await  promise5
    console.log(response);
}
consumePromiseFive()

// using fetch method with asycn await 
// async function getAllDeatils(){
//     try {
//         const response = await fetch("https://api.github.com/users")
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E : ", error);
//     }
// }
// getAllDeatils()

// using fetch method with .then .catch
fetch("https://api.github.com/users")
    .then((response)=> {
        return response.json();
    })
    .then((data) =>{
        console.log(data)
    })
    .catch((err)=>{
        console.log("Error in API", err)
    })