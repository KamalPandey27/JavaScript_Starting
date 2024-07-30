let clock = document.querySelector(".clockcontainer")

setInterval(() => {
    let date = new Date()
    let time = date.toLocaleTimeString()
    clock.innerHTML = time
    console.log(time)
}, 1000);
