let date = new Date()

// console.log(date)
// console.log(date.getTime())
// console.log(date.getDate())
// console.log(date.getMonth() + 1)
// console.log(date.getFullYear())
// console.log(date.getHours())
// console.log(date.getMinutes())
// console.log(date.getSeconds())
// console.log(date.getMilliseconds())

// Convert date into different form


// console.log(date.toDateString())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleString())

// setInterval(() => {
//     let date = new Date()
//     console.log(date.toLocaleTimeString())
// }, 1000);


// If you want to create your own date 

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})