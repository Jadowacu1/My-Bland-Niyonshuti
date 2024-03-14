let inputs = document.querySelectorAll('input');
const patterns = {
    email : /^([a-z\d\.]+)@([a-z\d]+)\.([a-z]){2,8}(\.[a-z]{2,8})?$/,
    password : /^[\w\d]{8,20}$/,
    password1 : /^[\w\d]{8,20}$/,
    lname : /^[a-z]{3,20}/i,
    fname : /^[a-z]{3,20}/i,
    phone : /^(072|078|079|073)[0-9]{7}$/


}
let password;
let password1;
let isValid = 0;
function checking(field,pattern){
    let errorMessage = field.name + "Message";
    if(pattern.test(field.value)){
      if(field.name == "password"){
         password = field.value;  
      } 
      else if(field.name == "password1"){
         password1 = field.value; 
      } 
       field.className = "valid";
       document.getElementById(errorMessage).innerHTML = "";
        isValid = true;
        
    }
    else{
       
        field.className = "invalid";
        switch(field.name){
            case "email":
                document.getElementById(errorMessage).innerHTML = "Email must be a valid address,e.g. me@mydomain.com";
                break;
            case "password":
                document.getElementById(errorMessage).innerHTML = "Password must be alphanumeric (@, _ and - are also allowed) and be 8 - 20 characters";  
                break;
            case "password1": 
            document.getElementById(errorMessage).innerHTML = "Password must be alphanumeric (@, _ and - are also allowed) and be 8 - 20 characters";
            break; 
            case "fname": 
            document.getElementById(errorMessage).innerHTML = "Name Must be 4 to 8 in long";
            break;
            case "lname": 
            document.getElementById(errorMessage).innerHTML = "Name Must be 4 to 8 in long";
            break;
            case "phone": 
            document.getElementById(errorMessage).innerHTML = "enter correct phone number eg: 078/072/073 + other seven numbers";
            break; 
        }
        isValid = false;
    }
}
inputs.forEach(Element => {
    Element.addEventListener('keyup',(e) => {
        checking(e.target,patterns[e.target.attributes.name.value]);
    });
});
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
     if(isValid){
        if(password == password1){
            this.submit();
            
        }
        else{
            document.getElementById("password1Message").innerHTML = "passowrd must be the same";  
        }
     
     }
    else{
        return;
    }

});
document.getElementById('login').addEventListener('submit', (e) => {
    e.preventDefault();
})

