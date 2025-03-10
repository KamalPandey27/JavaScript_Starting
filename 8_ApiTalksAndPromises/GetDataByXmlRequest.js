let img = document.getElementById("img");
let followers = document.getElementById("follwers");
let following = document.getElementById("following");
let form = document.getElementById("form");
let username = "kamalpandey27";
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.getElementById("input");
  username = input.value.trim();
  GetGithubData();
  input.value = "";
});

let GetGithubData = () => {
  let url = `https://api.github.com/users/${username}`;
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = function () {
    let data = JSON.parse(this.responseText);
    img.src = data.avatar_url;
    console.log();
  };

  xhr.send();
};

GetGithubData();
