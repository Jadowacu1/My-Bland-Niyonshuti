let inputs = document.querySelectorAll('input');
let patterns  = {
    email : /^([a-z\d\.]+)@([a-z\d]+)\.([a-z]){2,8}(\.[a-z]{2,8})?$/,
    password : /^[\w\d]{8,20}$/
}
const form= document.getElementById('login');
form.addEventListener('submit', function(event){
    event.preventDefault();
    if(validator()){
        form.submit();
    }
})
function validator(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if(!emailValidator(email)){
        document.getElementById('emailMessage').innerHTML = "Please the correct email e.g example@gmail.com"
        return false;
    }
    else{
        document.getElementById('emailMessage').innerHTML = "";
    }
    if (!passwordValidator(password)) {
        document.getElementById('passwordMessage').innerText = 'Password must be alphanumeric and be 8 - 20 characters';
        return false;
      } else {
        document.getElementById('passwordMessage').innerText = '';
      }
      return true;
}
function emailValidator(email) {
    const pattern = /^([a-z\d\.]+)@([a-z\d]+)\.([a-z]){2,8}(\.[a-z]{2,8})?$/;
    return pattern.test(email.toLowerCase());
  }
  function passwordValidator(password) {
    const pattern = /^[\w\d]{8,20}$/;
    return pattern.test(password);
  }