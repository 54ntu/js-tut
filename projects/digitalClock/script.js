const clock = document.getElementById('clock')
console.log(clock)

// const clock2 = document.querySelector('#clock')


setInterval(()=>{
    const date = new Date()
    // console.log(date.toLocaleTimeString())
    clock.innerHTML= date.toLocaleTimeString()
    

},1000)
