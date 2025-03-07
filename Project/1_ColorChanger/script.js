console.log("Welcome to JavaScript");

const box = document.querySelectorAll(".box");
const boxes = Array.from(box);

boxes.forEach((element) => {
  element.addEventListener("click", () => {
    let value = window.getComputedStyle(element);
    let checkcolor = value.getPropertyValue("background-color");
    document.body.style.backgroundColor = checkcolor;
    document.querySelector(
      ".color"
    ).innerHTML = `rbg value of color : ${checkcolor}`;
  });
});

function rancolor() {
  let ran1 = Math.floor(Math.random() * 299);
  let ran2 = Math.floor(Math.random() * 299);
  let ran3 = Math.floor(Math.random() * 299);
  let color = `rgb(${ran1} , ${ran2} , ${ran3})`;
  return color;
}

let btn = document.querySelector(".changeColor");

btn.addEventListener("click", () => {
  let colorchangebox = document.querySelectorAll(".box");
  let collectionbox = Array.from(colorchangebox);

  collectionbox.forEach((e) => {
    e.style.backgroundColor = rancolor();
  });
});
