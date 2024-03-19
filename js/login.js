let inputs = document.querySelectorAll('input');
const email = document.querySelector('#email').value;
const password = document.querySelector('#password').value;
let patterns  = {
    email : /^([a-z\d\.]+)@([a-z\d]+)\.([a-z]){2,8}(\.[a-z]{2,8})?$/,
    password : /^[\w\d]{8,20}$/
}
const form= document.getElementById('login');
form.addEventListener('submit', function(event){
    event.preventDefault();
    if(validator()){
        form.reset();
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
      fetchData(email,password);
      return true;
}
function emailValidator(email) {
    const pattern = /^([a-z\d\.]+)@([a-z\d]+)\.([a-z]){2,8}(\.[a-z]{2,8})?$/;
    return pattern.test(email.toLowerCase());
  }
  function passwordValidator(password) {
    const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    return pattern.test(password);
  }
  function fetchData(user,pass){
  let userData = JSON.parse(localStorage.getItem("Users")) || []; // Initialize userData properly
  let userExists = false;

  // Check if user already exists
  for (let i = 0; i < userData.length; i++) {
    if (userData[i].email === user && userData[i].password === pass) {
      document.getElementById('success').innerText = "Logged In";
      break;
    }
    else{
        document.getElementById('success').innerText = "Incorrect Email or Password";
    }
  }
    // let userData = JSON.parse(localStorage.getItem(user));
    // if(userData === null){
    //     alert("You don't have Account");
    // }
    // else{
    // if(userData.email === user && userData.password === pass){
    //     alert("Logged In");
    //         }
    // else{
    //     alert("Incorrect Email or Password");
       
    // }
    // }
 }