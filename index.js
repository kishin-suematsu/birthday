const birthday_card = document.querySelector(".birthdayCard");
const start_btn = document.querySelector(".start");

start_btn.addEventListener("click", function(){
    birthday_card.classList.remove("clear");
    start_btn.classList.add("clear");
})