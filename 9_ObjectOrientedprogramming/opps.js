const user = {
  username: "Kamal",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

//console.log(user.username)
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

// new keyword is a constructor method to make a new multiple instance of the one object
const userOne = new User("Kamal", 12, true);
const userTwo = new User("Anmol", 11, false);
console.log(userOne.constructor);
//  in this constructor gives refrence of function
// console.log(userTwo);
// console.log(userOne);

//  when we use new keyword then
/* step  1  create a new empty object
step 2 call a constructor function with the value as an argument 
step 3 inject the all value and variable in funtion and pass to function
step 4 all work is done and give output
*/
