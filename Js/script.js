
document.addEventListener('DOMContentLoaded',function() {
    const prueba = document.querySelector(".nav");
    const userIcon = document.querySelectorAll(".user-icon");
    const clientWindow = document.querySelector(".client");
    const hiddenBars = document.querySelectorAll(".hidden-button");
    const hiddenHeader = document.querySelector(".hidden");
    
  hiddenBars.forEach(elem => {
    elem.addEventListener("click", () => {
        console.log("hola");
        hiddenHeader.classList.toggle("show");
    });
  });

    userIcon.forEach(elem => {
        elem.addEventListener ("click", () => {
        clientWindow.classList.toggle("show");
    });
    });

   clientWindow.addEventListener('submit', e => {
    e.preventDefault();
    let userName = clientWindow.querySelector(".user").value;
    let pass = clientWindow.querySelector(".pass").value;
    console.log(userName,pass);
   })
    
   let infoForm = document.querySelector(".form__inputs");
   //console.log(mainForm);
   infoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formUser = infoForm.querySelector(".form-name").value;
    formEmail = infoForm.querySelector(".form-email").value;
    formTel = infoForm.querySelector(".form-tel").value;
    console.log(formUser,formEmail, formTel);
   });
   
 $(".hide-button").click(function() {
    
    $(".form").slideToggle();
 });

 $(".bars-hidden").click(function() {
    console.log("hola");
    $(".header-hidden").slideToggle();
 });
 
   
});










