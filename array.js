//array
//change in array has effects on two ways "shallow copy" and "deep copy"

const myArr= ['football','cricket','basketball',10,20]
// console.log(myArr[3]);

// array methods in javascript

// myArr.push('lol');
// console.log(myArr);

// myArr.unshift(1) 
// console.log(myArr);


//what is the difference between slice and splice
// slice gives the value within range without altering the original array
// splice gives the value with altering the original array


let arr1 = myArr.slice(1,3);
console.log(arr1);
console.log('original arr is : ', myArr);
 

let arr2 = myArr.splice(1,3);
console.log(arr2);
console.log('array after splice : ', myArr);

