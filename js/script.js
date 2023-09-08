const btnInsert = document.getElementById("btn_insert");
const btnClean = document.getElementById("btn_clean");

const km_price = 0.21;
const discount20 = 20;
const discount40 = 40;

let infoUser = "Nome e cognome"
let distance = "0";
let age = "0";
let prom = "offer";
let carrozza = "0";
let postalCode = "00000";
let price = "€"
let insertOk = true;


btnInsert.addEventListener("click", function(){
  infoUser = document.getElementById("name").value;
  distance = parseInt(document.getElementById("km").value);
  age = parseInt(document.getElementById("age").value);


console.log(infoUser);
console.log(distance);
console.log(age);
});