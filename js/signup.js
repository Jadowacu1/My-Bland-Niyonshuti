const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (validateForm()) {
    // document.getElementById('success').innerText = "Account Created Sucess full";
    form.reset();
  }
});
function validateForm() {
  const email = form.email.value;
  const password = form.password.value;
  const password1 = form.password1.value;
  
  if (!validateEmail(email)) {
    document.getElementById('emailMessage').innerText = 'Please enter a valid email address';
    return false;
  } else {
    document.getElementById('emailMessage').innerText = '';
  }
  if (!validatePassword(password)) {
    document.getElementById('passwordMessage').innerText = 'create Strong password with one Uppcase,lowercase  numbers and special character';
    return false;
  } else {
    document.getElementById('passwordMessage').innerText = '';
  }
  if (password !== password1) {
    document.getElementById('password1Message').innerText = 'Passwords do not match';
    return false;
  } else {
    document.getElementById('password1Message').innerText = '';
  }
  dataStoring(email,password); 
  return true;
  
 }
function validateEmail(email) {
  const pattern = /^([a-z\d\.]+)@([a-z\d]+)\.([a-z]){2,8}(\.[a-z]{2,8})?$/;
  return pattern.test(email.toLowerCase());
}
function validatePassword(password) {
  const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/
  ;
  return pattern.test(password);
}


function dataStoring(user, pass) {
  let userData = JSON.parse(localStorage.getItem("Users")) || []; // Initialize userData properly
  let userExists = false;

  // Check if user already exists
  for (let i = 0; i < userData.length; i++) {
    if (userData[i].email === user) {
      userExists = true;
      break;
    }
  }

  if (userExists) {
    // User already exists, return false or perform some other action
    // For example, you can display an alert message
    console.log("Email already in use");
    document.getElementById('success').innerText = "Email already in use";
    return false;
  } else {
    // User does not exist, add new user data
    let data = {
      email: user,
      password: pass
    };
    userData.push(data);
    localStorage.setItem("Users", JSON.stringify(userData));
    document.getElementById('success').innerText = "Account Created Sucess full";
    console.log(userData);
    return true; // Indicate successful creation
  }
}

