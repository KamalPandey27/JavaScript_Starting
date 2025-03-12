function addnumber(Number1, Number2) {
  if (!isNaN(Number1) && !isNaN(Number2)) {
    return Number1 + Number2;
  } else {
    return "you Enter a Wrong number";
  }
}

let result = addnumber(2, 4);
// console.log(result)
// After return the function will ignore the code which is return after the return statement

function islogged(username = "Unknown User") {
  if (username === undefined) {
    return console.log("Enter a username");
  } else {
    return `${username} Logged In`;
  }
}

let result1 = islogged();
// console.log(result1);

// When we want to pass multiple value in function example a cart in shopping web app

function cart(...price) {
  return price;
}
//It can give a array and this operator is a rest operator but when we use this operator in obj and array then its name is spread operator
// console.log( cart(300 , 2313 , 3211, 24532))

// *Pass an object in function

const user = {
  name: "kamal",
  price: 321,
};

function userdetails(anyobject) {
  return `${anyobject.name} ${anyobject.price}`;
}

let result2 = userdetails(user);
console.log(result2);

// pass a array in function

let arr = [200, 2341, 6534, 87651, 23];

function getarray(array) {
  console.log(array);
  console.log(array[4]);
}

getarray(arr);
