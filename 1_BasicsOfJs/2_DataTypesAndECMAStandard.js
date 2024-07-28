"use strict" ;  // it is used to give the instruction to javascript engine to use a  new javascript 

// Data Types in JS

// number
// null
// string
// symbol
// undefined
// bigint
// Boolean

console.log(typeof "kamal" , typeof (2) , typeof null , typeof undefined , typeof true )
// type of null is Object Some people says it is a mistake and some says it is right
// type of undefined is undefined

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

heros[2] = "Kamal"
heros.push("Anmol")
// console.log(heros)

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);
