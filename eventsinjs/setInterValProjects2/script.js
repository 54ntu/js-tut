///generate random color
let interValId; //defining interval id
const RandomColor =()=>{
    const hex ='0123456789ABCDEF'
    let color ='#'
    for(let i=0; i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}

console.log(RandomColor())



const startFunc =()=>{
    document.body.style.backgroundColor=RandomColor();

}

const stopFunct =()=>{
    clearInterval(interValId);
    interValId = null;

}


document.querySelector('#start').addEventListener('click', ()=>{
    if( !interValId){

        interValId = setInterval(startFunc,1000);
    }
});

document.querySelector('#stop').addEventListener('click', stopFunct);