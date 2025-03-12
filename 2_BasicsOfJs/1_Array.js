//  Two method of creating a array

let arr1 = [1, 2, 3, 4, 5, 7, 8, 98];
// console.log(arr1)

let arr2 = new Array("k", "a", "m", "a", "l");
// console.log(arr2)

// Method in Array

// arr1.push("Kamal")
// arr1.pop()

// console.log(arr1)

// console.log(arr1.length)

let joinarr = arr1.join(); // It will give the array in the form of string
console.log(joinarr);

// Difference Between Slice and splice in array

let arr3 = arr1.slice(1, 3); // slice only give the copy of array
// console.log("Orignal Array" , arr1)
// console.log("slice value",arr3)

let arr4 = arr1.splice(1, 3); // splice  give the element  of orignal array and update the array
// console.log("Orignal Array", arr1);
// console.log("slice value", arr4);
