let inputs = document.querySelectorAll('input');
const patterns = {
    email : /^([a-z\d\.]+)@([a-z\d]+)\.([a-z]){2,8}(\.[a-z]{2,8})?$/,
    lname : /^[a-z]{3,20}/i,
    fname : /^[a-z]{3,20}/i,
    phone : /^(072|078|079|073)[0-9]{7}$/
}
let text ;
let isValid = 0;
function checking(field,pattern){
    let errorMessage = field.name + "Message";
    if(pattern.test(field.value)){
       field.className = "valid";
       document.getElementById(errorMessage).innerHTML = "";
        isValid = true;
    }
    else{
        isValid = false;
        field.className = "invalid";
        switch(field.name){
            case "email":
            document.getElementById(errorMessage).innerHTML = "Email must be a valid address,e.g. me@mydomain.com";
            break;
            case "fname": 
            document.getElementById(errorMessage).innerHTML = "Name Must be 4 to 8 in long";
            break;
            case "lname": 
            document.getElementById(errorMessage).innerHTML = "Name Must be 4 to 8 in long";
            break;
            case "phone": 
            document.getElementById(errorMessage).innerHTML = "enter correct phone number eg: 078/072/073/079 + other seven numbers";
            break; 
        }
        
    }
}
inputs.forEach(Element => {
    Element.addEventListener('keyup',(e) => {
        checking(e.target,patterns[e.target.attributes.name.value]);
    });
});
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const regex = new RegExp(/^[^\d\s][\s\S]{19,}$/);
    if(isValid){
        const text = document.getElementById('text').value.trim()
        if(text !=='' && text.length >=20){
            if(regex.test(text)){
            this.submit();
            }
            else{
                document.getElementById("textMessage").innerHTML = "Message should start with letters";
            }

        }
        else{
            document.getElementById("textMessage").innerHTML = "Please provide a clear message with at least 20 characters.";  
        }
     
     }
    else{
        return;
    }

});

