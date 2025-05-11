document.addEventListener("DOMContentLoaded", function() {
     document.getElementById("Burger").addEventListener("click", function() {
         document.getElementById("Burger").classList.toggle("open"); 
         document.getElementById("BurgerMenu").classList.toggle("open"); 
    }); 
});