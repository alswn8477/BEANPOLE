$("#fullpage").fullpage({
  autoScrolling: true,
  navigation: true,
});

//header
let header = document.querySelector("header");
let ul = document.querySelectorAll(".gnb ul");
let gnb = document.querySelector(".gnb");
let logo = document.querySelector(".logo");

ul.forEach(function (oneDep) {
  oneDep.addEventListener("mouseenter", function () {
    header.classList.add("on");
    gnb.classList.add("on");
    logo.classList.add("on");
  });
  header.addEventListener("mouseleave", function () {
    header.classList.remove("on");
    gnb.classList.remove("on");
    logo.classList.remove("on");
  });
});

// header
// let header = document.querySelector("header");
// let logo = document.querySelector("header .logo");
// let ul = document.querySelector("header .gnb ul");
// let a = document.querySelectorAll("header .gnb .one_dep > a");

// header.onmouseenter = function () {
//   this.style.backgroundColor = "#fff";
//   ul.classList.add("on");
//   logo.querySelector("img:nth-child(1)").style.display = "none";
//   logo.querySelector("img:nth-child(2)").style.display = "block";
//   document.querySelector(".con").style.filter = "blur(10px)";
// };
// header.onmouseleave = function () {
//   this.style.backgroundColor = "transparent";
//   ul.classList.remove("on");
//   logo.querySelector("img:nth-child(1)").style.display = "block";
//   logo.querySelector("img:nth-child(2)").style.display = "none";
//   document.querySelector(".con").style.filter = "none";
// };
