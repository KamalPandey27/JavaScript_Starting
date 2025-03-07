let box = document.getElementById("box");

window.addEventListener("keydown", (e) => {
  box.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === " " ? "Space" : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
  </table>
    </div>
  `;
});

window.addEventListener("keydown", (e) => {
  if (e.code === "ArrowDown") {
    console.log("ArrowDown");
  } else if (e.code === "ArrowLeft") {
    console.log("ArrowLeft");
  } else {
    console.log(e.code, e.key);
  }
});
