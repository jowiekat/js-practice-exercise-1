// text change variables
var fans = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");

// theme switch event varriables
var themeToggle = document.querySelector("#toggle")
var ball = document.querySelector(".ball")
var h1 = document.querySelector("h1")
var body = document.querySelector("body")

fans.addEventListener("mouseover", function () {
  fans.innerText = "123K";
});

fish.addEventListener("mouseover", function () {
  fish.innerText = "47K";
});

pets.addEventListener("mouseover", function () {
  pets.innerText = "20K";
});


// theme switch function
themeToggle.addEventListener("click", function(){
  if(body.classList.contains("light")){
    body.classList.remove("light");
    ball.classList.remove("move-right");
    h1.innerText = "Stealth Quincy";

  }else{
    body.classList.add("light");
    ball.classList.add("move-right");
    h1.innerText = "party Quincy";
  }
  
});
