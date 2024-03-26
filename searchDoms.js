// let ctitle = document.getElementsByClassName("card-title");
// let ccolor = document.getElementById("firstcardtitle");
// ccolor.style.color = "green";

let ctitle = document.querySelectorAll(".card-title");
console.log(ctitle);
ctitle[0].style.color = "red";
ctitle[1].style.color = "blue";
document.querySelector(".this").style.color = "cyan";
document.querySelector(".this").style.background = "magenta";
console.log(document.getElementsByTagName("a"));
console.log(document.querySelector(".card").getElementsByTagName("a"));