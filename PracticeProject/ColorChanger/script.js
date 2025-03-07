let boxes = document.querySelectorAll(".Allboxes");
Array.from(boxes).forEach((item) => {
  item.addEventListener("click", (e) => {
    let value = window.getComputedStyle(e.target).backgroundColor;
    document.body.style.backgroundColor = `${value}`;
  });
});
