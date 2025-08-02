// for of loop with Array
// it also use to print a string

let arr = [1, 2, 3, 4, 56, 6];

for (const k of arr) {
  // console.log(k)
}

// for of loop with String

let name = "Kamal";

for (const k of name) {
  // console.log(k)
}

// Object is not iterable and it is not access by for of loop we use for in loop to access object

const object = {
  name: "kamal",
  college: "PIET",
};

for (const [k] of object) {
  //   console.log(k);
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

// console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
}
