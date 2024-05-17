<h1 style="text-align:center">JAVASCRIPT NOTES</h1>

<hr style="background-color:red">

1.null datatype->>>>
2.symbol-->>if we have to find some unique data then symbol is used
3.object datatype 


@highlight return type of null is object

```console.log(typeof null)```<br>
``` output: object```<br>
```console.log(typeof undefined)```<br>
```output: undefined```

<hr>

<h1 style="text-align:center"> Types conversion</h1>
we can easily convert some datatypes to the respected datatypes<br>

```let data1 = "333"```<br>
```let data2 = Number(data1)```<br>
```now the type of data2 will be number```



# why string to number conversion is confusing

```javascript

let value=3
let negvalue = -value
console.log(negvalue);




console.log("1"+2+2)
output: 122

console.log(1+2+"2")
output: 32


here->>>> ECMA script rules are applied 
```


<hr>

# comparison of datatypes in javascript
```javascript

we should be aware about the types of data we are going to compare<br>


like we can not compare string values with number



```

###strict check in javascript

```javascript
console.log('2' ===2);

//in this case datatype is strictly checked

console.log('2'==2);
output= true

//in this case datatype is not checked
```

# datatypes of javascript
---> on the basis of how datas are stored and fetched, datatypes are divided into two types:
1.primitive datatypes<br>
2.non-primitive datatypes<br>



```javascript
//primitives datatypes:
/// 7 types: string, Number, Boolean,null. undefined, symbol, BigInt

```

```javascript
// javascript is a dynamically typed language


//type of a variable is determined at runtime rather than at compile time 


let id = Symbol('123');
let anotherId = Symbol('123');
console.log(id== anotherId);


```


// non-primitive or reference(memory reference is allocated directly into the database)

1.Array<br>
2.Objects<br>
3.function


# why Array, objects and function are called as non-primitive datatypes

example
```javascript

let num1= [1,2,3,'lol'];

let myobj1={
    name:'lol',
    age:33
};

const myfunction = function (){
    console.log('hello world');
}
```




# dataypes and its return type

```javascript

null - objects
Number - number
undefined- undefined
string - string
boolean - boolean
Array- objects
function - function
```