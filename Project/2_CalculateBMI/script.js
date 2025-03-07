console.log("Welcome  to javscript");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let height = parseInt(document.querySelector("#height").value);
  let weight = parseInt(document.querySelector("#weight").value);
  let result = document.querySelector(".bmi");
  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Enter a Correct Height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Enter a Correct Weight";
  } else {
    let bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    if (bmi < 18.6) {
      result.innerHTML = `Your BMI is : ${bmi} And you are under Weight`;
    } else if (bmi > 18.6 && bmi < 24.9) {
      result.innerHTML = `Your BMI is : ${bmi} And you are in Normal Weight`;
    }
    if (bmi > 24.9) {
      result.innerHTML = `Your BMI is : ${bmi} And you are Over Weight`;
    }
  }
});
