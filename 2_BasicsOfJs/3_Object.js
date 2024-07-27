// singleton
// Object.create

// object literals

const sym = Symbol("FirstSymbol")

const obj = {
    "Course name" : "JavaScript",
    myname : "Kamal",
    rollno : 22827,
    college_name : "PIET",
    year_passed : ["istyear" , "Secondyear" , "Now3rdyear"],
    [sym] : "ObjSymbol" // this is the sytanx of use the symbol in object and also access this object symbol key with the use of obj[sym]
}

// console.log(obj)

console.log(obj.college_name) // first method to access the object keys
console.log(obj[ "Course name" ]) // second method this method is used when in object a key is define in the form of string
console.log(obj[sym])// To access a symbol of object 

obj.email = "kamal@chatgpt.com"
// Object.freeze(obj) // It is used to freeze our object when we does not want anyone change my object 
obj.email = "kamal@microsoft.com"
// console.log(obj);

obj.greeting = function(){
    console.log("Hello JS user");
}
obj.greetingTwo = function(){
    console.log(`Hello JS user, ${this.myname}`);
}

console.log(obj.greeting());
console.log(obj.greetingTwo());