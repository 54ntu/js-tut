# Stack and Heap Memory in JS

*stack (used by primitive datatypes)<br>
*Heap( Non-perimitive)

# primitive datatype && stack
--> when we assign value to the primitive datatype then the copy of reference of data is assigned to the variable 

```javascript
let user1 = "test"
let user2= user1

//here user2 is assigned with copy of reference of original data
// if we assign another value to user2 then there will be no changes in the original data assign to user1 until or unless user1 is given new data
user2="testuser"
console.log(user1);
console.log(user2);
```

# non-primitive datatypes && Heap memory
  -->> actually Heap memory is used by non-primitive or reference datatype 
  example
  ```javascript
let userdata={
  email:'test@google.com',
  phone:232232,
}

console.log(userdata);

let anotheruserdata = userdata;
console.log(anotheruserdata)
//if I change the anotheruserdata then the original data assign to the userdata also change
anotheruserdata.email="anotheruser@google.com"
console.log(userdata);
console.log(anotheruserdata);

```


```javascript
//use of precision in Number datatypes

let num1 = 12.8934
console.log(num1.toPrecision(3));
output --12.9

//if we change the value then
let num1 = 112.8934
console.log(num1.toPrecision(3));
output-- 113
```

```javascript
//Math in javascript
console.log(Math.abs(-4));
console.log(Math.random());
console.log(((Math.random()*10) +1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random()* (max-min +1)) +min);
//in this case we will get the value between min and max value 

```

# date and time in js
```javascript
let mydate = new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(typeof mydate);
// here the type of mydate is object
//its important to know its type for interview perspective

let mycreatedDate = new Date(2024,0,23)
console.log(mycreatedDate.toLocaleDateString());

```

# Array
```javascript
//shallow copy - means share the same reference
//deep copy - means donot share the same reference
//important methods of Array
1.push
2. pop
3.filter
4.map
5. forEach
6.join
7. slice
8. reverse
9. splice

// join() converts array into string
const arr= [0,1,2,3,4];
const newArr = arr.join()
console.log(newArr);
console.log(typeof newArr);
output -string
output- 0,1,2,3,4
```

# difference between slice and splice
# important points to know
--> when we do slicing, range is not included and the original array remains same<br>
-->when we do splicing, range is included and the original array is changed. Actually, the splice values are removed from the original arry

```javascript
 const arr= [0,1,2,3,4,5]
console.log("original arr is :" ,arr)
const arr1 = arr.slice(1,3);
console.log('original array after slicing is : ", arr);
console.log('arr1 values are : ", arr1);
//lets do splice
const arr2 = arr.splice(1,3);
console.log('original arr is : ", arr);
console.log( "arr2 values are : ",arr2);
```
# spread operator in js
```javascript
const arr1 = ['hello','hii','how'];
const arr2 =['hummm','hehe','hu'];
const newarr = [...arr1, ...arr2];
console.log(newarr);
```

# Objects
1. There are two ways to create objects i.e. <h4> literals and constructor</h4>
-->> when we create objects using constructor then the objects will be singleton<br>
--->>> when we create objects using literal then it won't be singleton
   ```javascript
   //object literals
   const JsUser ={
   name:'santu',
   age :18,
   email:'santu@google.com'
   
   }

   console.log(JsUser.email);
   console.log(JsUser['email']);
```

```javascript



   

