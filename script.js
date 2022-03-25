const form  = document.getElementById('form');  // get the form
const username = document.getElementById('username');  // get the username input
const email = document.getElementById('email');  // get the email input
const password = document.getElementById('password');  // get the password input
const password2 = document.getElementById('password2');  // get the password2 input


// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;  // get the parent of the input
    formControl.className = 'form-control error';  // add the error class to the parent
    const small = formControl.querySelector('small');  // get the small element
    small.innerText = message;  // add the error message
}

// Checks if email is valid
function isEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // regular expression for checking email
    
    return re.test(String(email).toLowerCase()); // return true if email is valid
}

// Gets the field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1); // capitalize the first letter of the input id and adds the rest of the letters afterwords
}

/* ( -> OPEN ME! BEFORE REFACTORING  <- ) This was the code that checked all the inputs to see if they had some form of value,
    if the email is valid, and if the passwords match.
    
if(username.value === '') {
  showError(username, 'Username is required');
} else {
  showSuccess(username);
}

if(email.value === '') {
  showError(email, 'Email is required');
} else if (!isEmail(email.value)) {
  showError(email, 'Email is not valid');
} else {
  showSuccess(email);
}

if(password.value === '') {
  showError(password, 'Password is required');
} else {
  showSuccess(password);
}

if(password2.value !== password.value) {
  showError(password2, 'Password is required');
} else {
  showSuccess(password2);
}

 */

// ( -> AFTER REFACTORING <-) Checks required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) { // for each input
        if (input.value.trim() === '') { // if the input is empty
            showError(input, `${getFieldName(input)} is required`); // show the error message
        } else {
            showSuccess(input); // if the input is not empty, show the success message
        }
    });
}


// Show input success message
function showSuccess(input) {
    const formControl = input.parentElement;  // get the parent of the input
    formControl.className = 'form-control success';  // add the success class to the parent
}


form.addEventListener('submit', function (e) {
  e.preventDefault(); // prevent the default behaviour of the form
  
  checkRequired([username, email, password, password2]); // check if the required fields are filled
  
})