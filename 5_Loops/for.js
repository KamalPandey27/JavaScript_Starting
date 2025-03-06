let table = 2;
for (let index = 1; index <= 10; index++) {
  //    console.log(`${table} X ${index} = ${table*index}`)
}

for (let index = 1; index <= 10; index++) {
  console.log(` Table of ${index}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`${index} X ${j} = ${index * j}`)
  }
}

let myArray = ["flash", "batman", "superman"];
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //console.log(element);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);

// }

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue
//     }
//    console.log(`Value of i is ${index}`);

// }

// let a = 0;
// while (a < 10) {
//   console.log(a);
//   a++;
// }
// let b = 0;
// do {
//   console.log(b);
//   b++;
// } while (b < 10);
