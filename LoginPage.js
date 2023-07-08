const toggle=document.getElementById("togglePassword");
const password=document.getElementById("upass");
const signup=document.getElementById("signup");

toggle.addEventListener('click', function() {
    if (password.type === 'password') {
      password.type = 'text';
    } else {
      password.type = 'password';
    }
  });
signup.addEventListener('click',()=>{
    window.location.href="/SignupPage.html";
});