// header-manu == nav bar
//nav-togal =icon

const navbar=document.querySelector(".header-manu")
const icon =document.querySelector(".nav-togal")

icon.addEventListener("click", function (){
        //    navbar.style.display="block";
           navbar.classList.toggle("show")
})