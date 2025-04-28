import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
 import'../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
 import '../sass/style.scss';


 //Add  Active To all Links In Navbar
 let navLinks = document.querySelectorAll('.navbar-nav .nav-link');
 navLinks.forEach((link)=>{
    link.addEventListener('click',()=>{
        navLinks.forEach((i)=>{
            i.classList.remove('active');
        })
        link.classList.add('active');
    })

 })




//  full years for copyright
let copyDate=new Date().getFullYear();
let currentYear = document.querySelector('#year').innerHTML=copyDate;






