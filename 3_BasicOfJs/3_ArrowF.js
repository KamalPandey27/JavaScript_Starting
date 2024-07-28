const user = {
    username: "Kamal",
    message: function m(){
        console.log(this.username)
        console.log(this) // it will give then current context
    }
}


// user.message()
// user.username = "Anmol"
// user.message()

// console.log(this)

function chai(){
    let username = "hitesh"
    console.log(this.username);
}

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))






