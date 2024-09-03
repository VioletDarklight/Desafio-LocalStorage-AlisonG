document.addEventListener("DOMContentLoaded", function () {
 let btn = document.getElementById("buttonText");

 btn.addEventListener("click", function () {
  let input = document.getElementById("inputText").value;

  localStorage.setItem("value_key", input);
 });
});
