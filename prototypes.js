//new keyword - plays vital role while creating new objects
//js has prototypal behavior
//inside arrow function we can not use this keyword because of the prototype
//prototypal inheritance

//function is both function and object

/*
here's what happens behind the scene when the new keyword is used:

A new object is created :the new keyword initiates the creation of a new javascript object.

A prototype is linked :the newly created object gets linked to the prototype property of the constructor function.this means that it has access to properties and methods defined on the constructor's prototype.

the constructor is called: the constructor function is called with the specified arguments and this is bound to the newly created object. if no explicit return value is specified from the constructor, Javascript assumes this, the newly created object, to be the intended return value.

the new object is returned: After the constructor function has been called, if it doesnot return a non-primitive value(object,array,function, etc.) the newly created object is returned.

*/


let myName = 'santu           '
// console.log(myName.length)
// console.log(myName.trim().length)

let myHeroes = ['thor', 'spiderman']

let heroPower ={
    thor:'hammer',
    spiderman:'sling',
    
}