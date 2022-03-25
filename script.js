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
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return re.test(String(email).toLowerCase());
}

// Show input success message
function showSuccess(input) {
    const formControl = input.parentElement;  // get the parent of the input
    formControl.className = 'form-control success';  // add the success class to the parent
}

// Add event listener to the form that prevents default behaviour
form.addEventListener('submit', function (e) {
  e.preventDefault();
  
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
  
})