let form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let weightValue = Number(document.getElementById("weight").value);
  let heightValue = Number(document.getElementById("height").value);
  if (weightValue && heightValue) {
    let BMI = weightValue / (heightValue * heightValue);
    document.getElementById("result").innerHTML = `Result : ${BMI}`;
  } else {
    document.getElementById("result").innerHTML = "Enter Value";
  }
});
