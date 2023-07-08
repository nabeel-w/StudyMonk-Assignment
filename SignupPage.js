const toggle1=document.getElementById("togglePassword1");
const toggle2=document.getElementById("togglePassword2");
const password=document.getElementById("upass");
const cpassword=document.getElementById("ucpass");
const signin=document.getElementById("signin");

toggle1.addEventListener('click', function() {

    if (password.type === 'password') {
      password.type = 'text';
      toggle1.className='bi bi-eye-slash';
    } else {
      password.type = 'password';
      toggle1.className='bi bi-eye';
    }
  });
toggle2.addEventListener('click', function() {
    if (cpassword.type === 'password') {
      cpassword.type = 'text';
      toggle2.className='bi bi-eye-slash';
    } else {
      cpassword.type = 'password';
      toggle2.className='bi bi-eye';
    }
  });
cpassword.addEventListener("blur",()=>{
    if(cpassword.value===password.value){
        
        cpassword.placeholder=`Confirm Password`
        cpassword.style.border='solid 1px #a3b1e5'
        cpassword.style.color='#000'
    }
    else{
        
        cpassword.placeholder=`Password Didn't Match`;
        cpassword.style.border='1px solid crimson';
        cpassword.style.color='crimson'
    }
})
signin.addEventListener('click',()=>{
    window.location.href="/LoginPage.html";
})