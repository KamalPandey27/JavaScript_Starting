// const number = 123;

// // Convert number to string and split into an array of digits
// const digits = number.toString().split("");
// console.log(digits);
// // Find the largest digit
// const largestDigit = Math.max(...digits.map(Number));

// console.log(`The largest digit is ${largestDigit}`);

// let a = 350;
// let b = 400;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log(a, b);

// let arr = [4, 6, 7, 8, 2];

// let [a, b, c, d, e] = arr;
// console.log(a, b, c, d, e);

// let [f, g, h, ...i] = arr;

// console.log(f, g, h, i);
// console.log(f, g, h, ...i);

// let myname = "Kamal";

// let [a, b, c, d, e, k = "p"] = myname;
// console.log(a, b, c, d, e, k);

// let obj = {
//   myname: "kamal",
//   rollnumber: 22323,
// };

// let { myname, rollnumber } = obj;

// let a = 9;
// let b = 5;

// [c, d] = [a, b];

// console.log(c, d);

// let Myname = "W3Schools";

// let [a1, a2, a3, ...a4] = Myname;

// console.log(a1, a2, a3, a4.toString());

// let a = [1, 2, 3, 4, 5, 6];
// let newNumber = [...a, 9, 0];
// console.log(newNumber);

let age = 30;

if (age > 21 && age < 80) {
  console.log("You are eligible for vote");
} else {
  console.log("you are not eligible for vote");
}

let num = 30;

if (num > 0) {
  console.log("Num is positive");
} else if (num < 0) {
  console.log("num is nagative");
} else if (num == 0) {
  console.log("num is equal to zero");
}

for (let index = 1; index <= 5; index++) {
  for (let j = 0; j < 5; j++) {
    document.write("x");
  }
}
