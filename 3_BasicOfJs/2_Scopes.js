// value declare outside the scope {} then it is a global scope variable


let a = 42
const b = 4342
// var c = "keyboard" // var is not used because its nature is global even if it is in scope or not

if (true) {
    //  this is a block scope
    let a = "Kamal"
    const b = "anmol"
    console.log(a)
    console.log(b)
}
console.log(a)
console.log(b)
// console.log(c)


// deep dive in scope



function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5) 
// this will give  a error because we initialize a function in variable and a variable can not access before initialization
const addTwo = function(num){
    return num + 2
}


