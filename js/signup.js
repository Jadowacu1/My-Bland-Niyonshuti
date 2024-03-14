const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (validateForm()) {
    form.submit();
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
    document.getElementById('passwordMessage').innerText = 'Password must be alphanumeric and be 8 - 20 characters';
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
  return true;
}
function validateEmail(email) {
  const pattern = /^([a-z\d\.]+)@([a-z\d]+)\.([a-z]){2,8}(\.[a-z]{2,8})?$/;
  return pattern.test(email.toLowerCase());
}
function validatePassword(password) {
  const pattern = /^[\w\d]{8,20}$/;
  return pattern.test(password);
}

