// const pormiseOne = new Promise((resolve, reject) => {
//   // DB calls , cryptography , network
//   // Do any async code
//   setTimeout(() => {
//     console.log("Async task is complete");
//     resolve();
//   }, 3000);
// });

// pormiseOne.then((res) => {
//   console.log("Promise Consumed");
// });

// const promiseTwo = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ usename: "Kamal", Email: "kamalpandey0009@gmail.com" });
//   }, 2000);
// });

// promiseTwo.then((res) => {
//   console.log(res);
// });

// const promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({ username: "Kamal", Email: "kamalpandey0009@gmail.com" });
//     } else {
//       reject("Error Detected");
//     }
//   }, 2000);
// });

// promiseFour
//   .then((res) => {
//     console.log(res);
//     return res.username;
//   })
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Finaly is Always Completed");
//   });

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "Anmol", Email: "anmolsharma0009@gmail.com" });
//     } else {
//       reject("Error Detected");
//     }
//   }, 2000);
// });

// async function consumePromiseFive() {
//   try {
//     let res = await promiseFive;
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// API Call using async await
let url = "https://jsonplaceholder.typicode.com/users";
async function ApiCall(url) {
  try {
    let data = await fetch(url);
    let finalData = await data.json();
    /* when we return this data by using a return keyword
     then we use a async function to run this apicall method 
     because a async function return a promise so we can complete the promise then we want to use 
     async function to this 
     */
    // return finalData;
    console.log(finalData);
  } catch (error) {
    console.log("Error occur in jsonApi");
  }
}

// ApiCall(url);

// async function Main(url) {
//   let result = await ApiCall(url);
//   console.log(result);
// }

// Main(url);

// api call in .then and .catch format

function ThenCatchFormat(url) {
  fetch(url)
    .then((response) => {
      let data = response.json();
      return data;
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

ThenCatchFormat(url);
