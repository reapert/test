let menubtrn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menubtn.onclick = () =>{
    menubtn.classlist.toggle('fa-times');
    navbar.classList.toggle('active');
}