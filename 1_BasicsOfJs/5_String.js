const name = "hitesh";
const repoCount = 50;

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hitesh-hc-com");

// console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   hitesh    ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://hitesh.com/hitesh%20choudhary";
const url = "https://www.youtube.com/watch?v=sscX432bMZo&t=7587s";

// console.log(url.replace("=", "-"));
// console.log(url.replaceAll("=", "-"));

// console.log(url.includes('hitesh'))

// console.log(gameName.split('-'));

const email = "test@example.com";
email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/); // Email validation

const fileName = "report.pdf";
const extension = fileName.slice(-5, -3);
console.log(extension);

const invoiceNum = "42";
const padded = invoiceNum.padStart(5, "1");
console.log(padded);
