console.log("kamal tested");
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Async 2 resolved");
});
console.log("kamal tested");