//this keyword refrence current object

// function chai(){
//     console.log(this)

// }

// chai();



const test= ()=>{
    // console.log(this)
    console.log('arrow function')
}

test();

//this one is implicit function
//if we use curly braces then it is mandatory to write return keyword and return the values.
const addTwo =(num1,num2)=>(num1+num2) //if we use parenthesis then we donot need to use return keyword

console.log(addTwo(3,4));



//explicit method
//in this we need to use curly braces explicitly.

const addOne = ()=>({username:'lol'})

console.log('addone result is : ', addOne());



//immediately invoked function expressions(IIFE)

// (function chai(){
//     console.log('db connected')
// })();


//syntax for iife function is 

// ()()

//global scope created pollution so to prevent from them ife function is used


(function chai(){
    console.log('db connected');
})();



((name)=>{
    console.log(`db connected two ${name}` );
})('santu')
