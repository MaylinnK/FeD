/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser * /

/*eslint 'no-console': 0*/

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */




/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  console.log("im working");
  var myDropdown = document.getElementById("dropdown");
  if (myDropdown.classList.contains('show')) {
    myDropdown.classList.remove('show');
  }
  else {
    myDropdown.classList.add('show');
  }
}
document.getElementById('dropbtn').addEventListener("click", myFunction);


var nav = document.getElementById("nav");
var dropbtn = document.getElementsByClassName("dropbtn");
console.log(dropbtn);


function hamburger() {
  console.log("Im working");
  if (nav.style.display == "block") {
    nav.style.display = "none";
    console.log("none");
  } else {
    nav.style.display = "block";
    console.log("block");
  }
}
document.getElementById("hamburger").addEventListener("click", hamburger);


var sliderArray = ['a', 'b', 'c'];
var number = 0;
var a = document.getElementById('slidea');
var b = document.getElementById('slideb');
var c = document.getElementById('slidec');


function next() {
  if (number < sliderArray.length - 1) {
    number += 1;
  } else if (number == sliderArray.length - 1) {
    number = 0;
  }
}
document.getElementById('next').addEventListener("click", next);

function previous() {
  if (number == 0) {
    number = 2;
  } else if (number > 0) {
    number -= 1;
  }
}
document.getElementById('previous').addEventListener("click", previous);

function slideShow() {
  if (number == 0) {
    a.style.display = 'block';
    b.style.display = 'none';
    c.style.display = 'none';
  } else if (number == 1) {
    a.style.display = 'none';
    b.style.display = 'block';
    c.style.display = 'none';
  } else if (number == 2) {
    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'block';
  }
}
document.getElementById('next').addEventListener("click", slideShow);
document.getElementById('previous').addEventListener("click", slideShow);
