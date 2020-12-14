/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser * /

/*eslint 'no-console': 0*/

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
var nav = document.getElementById("nav");

function hamburger() {
  console.log("Im working");
  if (nav.style.display == "block") {
    nav.style.display = "none";
    console.log ("none");
  } else {
    nav.style.display = "block";
    console.log ("block");
  }
}
document.getElementById("hamburger").addEventListener("click", hamburger);
