const btnInsert = document.getElementById("btn_insert");
const btnClean = document.getElementById("btn_clean");

const km_price = 0.21;
const discount20 = 20;
const discount40 = 40;

let infoUser = "Nome e cognome"
let distance = "0";
let age = "0";
let prom = "offer";
let nCarriage = "0";
let postalCode = "00000";
let price = "€"
let insertOk = true;
let message;


btnInsert.addEventListener("click", function(){
  nameUser = document.getElementById("name").value;
  distance = parseInt(document.getElementById("km").value);
  ageUser = parseInt(document.getElementById("age").value);
  

  price = distance * km_price;
  document.querySelector(".discount").innerHTML = "No promo";

  if(ageUser == 1){
    price *= 1 - (discount20/100);
    document.querySelector(".discount").innerHTML = "Promo YOUNG";
    document.querySelector(".final_price").innerHTML = price;
  }else if(ageUser == 3){
    price *= 1 - (discount40/100);
    document.querySelector(".discount").innerHTML = "Promo OVER 65";
    document.querySelector(".final_price").innerHTML = price;
  }
  
  document.querySelector(".final_price").innerHTML = price;
  document.querySelector(".user").innerHTML = nameUser;
  document.querySelector(".n_carriage").innerHTML = nCarriage;
  document.querySelector(".cap").innerHTML = postalCode;
});