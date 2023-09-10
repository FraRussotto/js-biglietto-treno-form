const btnInsert = document.getElementById("btn_insert");
const btnClean = document.getElementById("btn_clean");

const km_price = 0.21;
const discount20 = 20;
const discount40 = 40;

let infoUser = "Nome e cognome";
let distance;
let age;
let prom;
let nCarriage;
let postalCode;
let price = "€"
let insertOk = true;
let message;

btnClean.addEventListener("click", function(){
  document.getElementById("name").value = "";
  document.getElementById("km").value = "";
  document.getElementById("age").value = 0;
  document.querySelector(".output").classList.add("d-none");

});

btnInsert.addEventListener("click", function(){
  document.querySelector(".output").classList.remove("d-none");

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

  nCarriage =  Math.floor(Math.random() * 15) + 1;
  postalCode = Math.floor(Math.random() * 50) + 100;

  document.querySelector(".final_price").innerHTML = "&euro;" + price;
  document.querySelector(".user").innerHTML = nameUser;
  document.querySelector(".n_carriage").innerHTML = nCarriage;
  document.querySelector(".cap").innerHTML = "90" + postalCode;
});
