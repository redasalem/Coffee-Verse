import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
 import'../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
 import '../sass/style.scss';


//  full years for copyright
let copyDate=new Date().getFullYear();
let currentYear = document.querySelector('#year').innerHTML=copyDate;






// التحقق من كتابة عناصر الادخال بشكل صحيح
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })();


  
  //التحكم فى ظهور خلفية ولون عناصر القائمة العلوية عن النزول للاسفل

  (function () {
    const changeNavbar = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    changeNavbar();
  
    window.addEventListener('scroll', changeNavbar);
  })();



  