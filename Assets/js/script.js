"use strict";
const input = document.getElementById("task");
const addBtn = document.querySelector(".add-btn");
const tasks = document.querySelector(".tasks");
add.addEventListener("click", () => {
  const html = `
    <p><span>${input.value}</span><button class="btn btn-danger">
    <i class="bx bx-trash delete-btn"></i>
  </button></p>
`;
  tasks.insertAdjacentHTML("beforeend", html);
  input.value = "";
  const deleteBtn = document.querySelectorAll(".delete-btn");
  deleteBtn.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      console.log(e.target.parentNode.parentNode.remove());
    });
  });
});
