// //lexical scoping
// function outerFunc(){
//     let username= 'lol'
//     function innerFunc(){
//         console.log(username);
//     }

//     innerFunc();
// }
// // console.log(username)
// outerFunc();


//closure scoping

function makeFunc(){
    const name = "chrome"
    function displayName(){
        console.log(name)

    }
    return displayName;
}
const myfunc = makeFunc();
myfunc();