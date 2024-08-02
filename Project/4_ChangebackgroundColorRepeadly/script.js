let start = document.getElementById("start")
let stop = document.getElementById("stop")
let timeinterval


function RandomColor() {
    let randomcolor = "#"
    let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
    for (let index = 0; index < 6; index++) {
        randomcolor += hex[Math.round(Math.random() * 16)]
    }
    return randomcolor
}

function ChangeBgColor() {
 document.body.style.backgroundColor = RandomColor()
}

start.addEventListener("click", () => {
    if(timeinterval == null){
        timeinterval = setInterval(ChangeBgColor, 1000);
    }
    
})

stop.addEventListener("click", () => {
    clearInterval(timeinterval)
    timeinterval = null
})