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



  
