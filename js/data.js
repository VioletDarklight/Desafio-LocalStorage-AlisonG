document.addEventListener('DOMContentLoaded', function () {
 /*Forma 1*/
 let input = localStorage.getItem('value_key');

 let data = document.getElementById("data");
 data.innerHTML += input;

 /*Forma 2*/
 //document.getElementById("data").innerHTML = localStorage.getItem('value_key');
});