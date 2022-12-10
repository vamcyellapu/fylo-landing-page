"use strict";
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const errormsg = document.querySelector(".input__error");
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function keyPress() {
  if (!input.value.match(pattern)) {
    errormsg.classList.add("display");
    input.classList.add("display");
  } else {
    errormsg.classList.remove("display");
    input.classList.remove("display");
  }
}
btn.addEventListener("click", keyPress);
