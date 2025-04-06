// There are two ways to create a object

// const tinderUser = new Object()

const tinderUser = {};

tinderUser.username = "Kamal";
tinderUser.email = "kamalpandey0009@gmail.com";
tinderUser.id = "Kamal27";

// console.log(tinderUser)

const object_1 = {
  useralldetails: {
    name: "kamal",
    phone_number: 8059125852,
    address: "Panipat",
  },
};

// console.log(object_1.useralldetails.address) // this is method to retrive a object element

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

const obj3 = { ...obj1, ...obj2, ...obj4 }; // first method to combine an object
console.log(obj3);

// const obj3 = Object.assign({},obj1, obj2 , obj4)  // second method to combine an object
// console.log(obj3)

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

// console.log(users[0])
// console.log(users[0].email)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

// Object Destructuring

const obj5 = {
  city: "Panipat",
  area: "Desraj colong",
  state: "haryana",
};

const { state } = obj5;
const { city: cities } = obj5;

console.log(cities)[
  // Api data format

  // {
  //     "nama" : "Kamal",
  //     "ID" : 228,
  //     "Cityname" : "Panipat"
  // }

  [{}, {}, {}]
];
