// const promiseOne = new Promise((resolve,reject)=>{

// //Do as async task
// //DB calls, cryptography, network
// setTimeout(function(){
//     console.log('async task is completed');
//     resolve()
// },1000)

// });



// promiseOne.then(()=>{
//     console.log('promise consumed');
// })




// const promiseTwo = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let error = false;
//         if (!error){
//             resolve({username:'santu', email:'santu@gmail.com'});

//         }
//         else{
//             reject('ERROR: something went wrong');
//         }
        
//     }, 1000);
   
// })

// promiseTwo.then((user)=>{
//     console.log(user)
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch((err)=>{
//     console.log(err)
    
// }).finally(()=>{
//     console.log('finally issue is either rejected or resolved.')
// })

// //gievn above is the process of chaining with the help of which we can use the result obtain from one .then method to the another .then method



// ///next promise 

// const promiseThree = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let error = true
//         if(!error){
//             resolve({username:'lol', email:'lol@gmail.com'})

//         }else{
//             reject('you have done some mistake')
//         }
        
//     }, 1000);
// });

// async function consumePromiseThree(){
//     try {
        
//         const response = await promiseThree;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
        
//     }
   
// }
// consumePromiseThree()


fetch("https://api.github.com/users/54ntu")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("error occurred : ", error);
})
