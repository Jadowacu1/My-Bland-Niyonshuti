const form = document.getElementById('form');
form.addEventListener('submit', function(Event){
    Event.preventDefault();
    if(validator()){
        form.reset();
    }
});
 function validator(){
    let email = document.getElementById('email').value;
    let lname = document.getElementById('lname').value;
    let fname = document.getElementById('fname').value;
    let phone = document.getElementById('phone').value;
    let txt = document.getElementById('txt').value;
    console.log(txt);
    if(!fnameValidator(fname)){
        document.getElementById('fnameMessage').innerHTML = "Name Must be 3 and above characters in long";
        return false;
    }
    else{
        document.getElementById('fnameMessage').innerHTML = "";
    }
    if(!lnameValidator(lname)){
        document.getElementById('lnameMessage').innerHTML = "Name Must be 3 and above characters in long";
        return false;
    }
    else{
        document.getElementById('lnameMessage').innerHTML = "";
    }
    if(!emailValidator(email)){
        document.getElementById('emailMessage').innerHTML = "Please the correct email e.g example@gmail.com"
        return false;
    }
    else{
        document.getElementById('emailMessage').innerHTML = "";
    }
    
    if(!phoneValidator(phone)){
        document.getElementById('phoneMessage').innerHTML = "number must be of 078/079/073/072 + 7 numbers";
        return false;
    }
    else{
        document.getElementById('phoneMessage').innerHTML = "";
    }

    if(!txtValidator(txt)){
        document.getElementById('textMessage').innerHTML = "Provide a clear message with above 20 character"; 
        return false;
    }
    else{
        document.getElementById('textMessage').innerHTML = "";
    }
    dataStoring(email, lname,fname,phone,txt);
    return true;
 }
 function emailValidator(email){
    const pattern = /^([a-z\d\.]+)@([a-z\d]+)\.([a-z]){2,8}(\.[a-z]{2,8})?$/;
    
    return pattern.test(email);
 }
 function fnameValidator(fname){
    const pattern = /^[a-z]{3,20}$/i;
    return pattern.test(fname);
}
function lnameValidator(lname){
    const pattern = /^[a-z\s]{3,20}$/i;
    return pattern.test(lname);
}
function phoneValidator(phone){
    pattern = /^(072|078|079|073)[0-9]{7}$/;
    return pattern.test(phone);
}
function txtValidator(txt){
     pattern = /^(?!.*[^a-z\s0-9,.]).{20,}$/i
     return pattern.test(txt);
   }
   function dataStoring(email, lname,fname,phone,txt) {
    
    let userData = JSON.parse(localStorage.getItem("message")) || [];
    if(userData.includes(email)){
        return false;
    }
    let message = {
      email: email,
      phone : phone,
      lname : lname,
      fname : fname,
      message : txt
    };
    userData.push(message);
    localStorage.setItem("message", JSON.stringify(userData));
    console.log(userData);   
  }
