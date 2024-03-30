"use strict";

//events
// let btn = document.getElementById("btn-click");
// btn.addEventListener("click", function () {
//   document.body.classList.toggle("newcollor");
// });

//==

// let inputFild = document.getElementById("username");

// inputFild.addEventListener("focus", function () {
//   inputFild.style.outline = "none";
// });

// inputFild.addEventListener("keydown", function (e) {
//   inputFild.style.border = "2px solid green";
// });

//to do list

let inputElement = document.getElementById("input-element");
let addbutton = document.getElementById("add-btn");
let listUl = document.getElementById("ul-list");
let form = document.getElementById("li-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputvalue = inputElement.value;
  let liEl = document.createElement("li");
  liEl.classList.add('li-style')

  liEl.textContent = inputvalue;

  let btnDelete = document.createElement("i");
  btnDelete.classList.add("fa-solid");
  btnDelete.classList.add("fa-trash");
  btnDelete.style.color = "white";
  btnDelete.addEventListener("click", function () {
    liEl.remove();
  });

  liEl.appendChild(btnDelete);
  listUl.appendChild(liEl);

  inputElement.value = "";

  let deleteAll = document.getElementById("deleteAll");
  deleteAll.addEventListener("click", function () {
    liEl.remove();
  });
});
