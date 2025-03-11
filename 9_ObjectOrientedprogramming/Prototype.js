/* What is a Prototype?
Every JavaScript object has a hidden property called 
[[Prototype]], which refers to another object. This prototype 
object acts as a blueprint from which other objects can inherit 
properties and methods. 

=> In js all concepts is moslty a object 
*/

// function multiply5(num) {
//   return num * 5;
// }

// multiply5.power = 4;

// console.log(multiply5.power);
// console.log(multiply5.prototype);

// function createUser(username, score) {
//   this.username = username;
//   this.score = score;
// }

// createUser.prototype.increment = function () {
//   this.score++;
// };

// createUser.prototype.printMe = function () {
//   console.log(`score is ${this.score}`);
// };

// const chai = new createUser("tea", 29);
// const kamal = new createUser("kamal", 90);

// chai.increment();
// chai.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

// => Understanding the new Keyword in JavaScript (Easy Explanation)
// The new keyword in JavaScript is used to create a new object from a constructor function or class. It does the following things:

// Creates a new empty object {}.
// Links the new object’s prototype to the prototype of the constructor function or class.
// Calls the constructor function, setting this to the new object.
// Returns the new object automatically.

//  => Set a new method in prototype of string
// function trueLength() {
//   console.log(`Value of string is ${this} and length is ${this.trim().length}`);
// }

// String.prototype.trueLength = trueLength;
// let myName = "kamal      ";
// myName.trueLength();

let myheros = ["thor", "spiderman"];

let heropower = {
  thor: "hammer",
  spiderman: "sling",
  getspiderpower: function () {
    console.log(`spidy power is ${this.spiderman}`);
  },
};

Object.prototype.kamal = function () {
  console.log(`kamal is present in all objects : ${this[0]}`);
  console.log(`kamal is present in all objects : ${this[1]}`);
};

Array.prototype.heykamal = function () {
  console.log(`kamal says hello`);
};

// myheros.kamal();
// myheros.heykamal();
/* heropower.heykamal();
object is global and when we want access any method by using string and array
 when a array or string have not a method then it check its our prototype and
  parent prototype which is object ang give the access
  but this could be done only if a method is available in object
 when a method is present in array and string want to use this method
 then it is not possible
 because a array can use only our slef method and object 
 method not the other element and also string 
 */

//  We also set a prototype using __proto__
// Modern syntax
// Object.setPrototypeOf(heropower, kamal);
// heropower → The object whose prototype you want to change.
// kamal → The new prototype to assign to obj.
