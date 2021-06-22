const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

//All Functions
//Functions to show error
function showError(input,message) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control error'
    const small = formcontrol.querySelector('small')
    small.innerText = message;
}

//Fuction to show success
function showSuccess(input) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success'
}

//Function to check if email is valid
function isValidEmail(email) {
    re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Function to check if required feilds are written
function checkRequired(inputArray) {
   inputArray.forEach(function(input) {
       if ( input.value === '' ) {
           console.log(input.id);
           showError(input,`${getFeildId(input)} is required` );
       } else {
           showSuccess(input);
       }
   }); 

   //Fucntion to get the ideal input field
   function getFeildId(input) {
      return input.id.charAt(0).toUpperCase() + input.id.slice(1);
   }


// This is an event listener 
form.addEventListener('submit',function(e) {
    e.preventDefault();

    checkRequired([username,email,password,password2]);
})}