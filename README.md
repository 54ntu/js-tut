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
//rest operator and spread operator are same

function calculateCartPrice(...num1){
return num1
}
console.log(calculateCartPrice(200,300,400);
output-[200,300,400]
```
<hr>
# <h2 style="color:red">How does javascript execute code + call stack </h2>
1. execution context
2. call stack

<hr>
1. javascript execution context--> it is nothing but how does execution of code handle in javascript
a...first step - Global execution context is separated -- this value is 
assigned in this Global execution context<br>
b..functional execution context<br>
c..Eval execution context
different phases are :
1. Memory creation phase<br>
2. Execution phase


```javascript

let val1 = 10;
let val2 = 5
function addNum(num1,num2){
let total = num1+ num2;
return total;
}
let result1 = addNum(val1,val2);
let result2 = addNum(10,2)

//steps involve in execution of the JS code
1.Global execution context-->>which is allocated to this
2. memory creation phase-->>variables are gathered together and kept it
val1----undefined<br>
val2----undefined<br>
addNum ---definition<br>
result1--undefined
result2---undefined

3...execution phase:
-->>val1---10
-->val2--5
//when we reach  addNum function then there is nothing to assign and previously it is assigned a memory then next line will be executed
//now result1 willl be executed but
// result1 is assigned with a function so that new execution context is created every time when the function is executed
-->addNum () function will be executed for this new execution context i.e. memory phase and execution context are created


```

<h2>Call stack</h2>
<hr>
1. at first global execution context is created at the end of the stack<br>
2. then function execution context is created just above the global execution context

<h1>control flow in javascript</h1>

<p>falsy values</p>
1. false
2. 0
3.  -0
4. BigInt
5. 0n
6. ""
7.null
8.undefined
9.   NaN

<h4>truthy values</h4>
1. "o "
2. 'false',
3. ""
4. [],
5. {}
6. function (){}



<h2>Nullish coalescing operator (??): null undefined</h2>
-->this nullish operator handle null value case

<h5>for of loop</h5>
<hr>

```javascript

const arr= [1,2,3,4,5]
for (const num of arr){
console.log(num)
}
//we can use this forof loop in object array and strings too

const greetings = "hello world"
for (const greet of greetings)
{
console.log(`Each char is ${greet})
}

# notes

const arr=['a','b','c']
for (let val1 in arr){
console.log(arr[val1]);
}

//for of loop gives the value
//for in loop gives the index value... but we can fetch the values by passing the key as i.e. arr[val1]

//forEach () loop


const coding= ["JS","Ruby","Java","python","CPP"]
conding.forEach( function (val){
console.log(val)
}
)

```

<hr>
<h4>Reduce method</h4>
<hr>

```javascript
const shoppingcart= [
{
itemname:'Mern courses'
price:25000,
},

{
itemname:'python course',
price:10000,
},
{
itemname:'react js',
price:15000,
}
]

const total_price= shoppingcart.reduce((acc, item)=>acc+item.price,0)

console.log(total_price);
```




