const form = document.querySelector('form');

const firstNameField = form.querySelector(".firstName");
const firstNameInput = firstNameField.querySelector('input');

const lastNameField = form.querySelector(".lastName");
const lastNameInput = lastNameField.querySelector('input');

const emailField = form.querySelector(".email");
const emailInput = emailField.querySelector('input');

const passwordField = form.querySelector(".password");
const passwordInput = passwordField.querySelector('input');

let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //Pattern to validate email

const leftText = document.querySelector('.text');
const rightColumn = document.querySelector('.rightColumn');

const thankyouText = document.querySelector('.thankyouText');

form.onsubmit = (e)=> {

    e.preventDefault(); //Preventing form from submitting

    if(firstNameInput.value == "") { 
        firstNameField.classList.add('shake', 'error');
    }

    if(lastNameInput.value == "") { 
        lastNameField.classList.add('shake', 'error');
    }

    if(emailInput.value == "") { 
        emailField.classList.add('shake', 'error');
    }

    if(!emailInput.value.match(pattern) && !emailInput.value == "") { 
        emailField.classList.add('shake', 'emailError');
    }

    if(passwordInput.value == "") { 
        passwordField.classList.add('shake', 'error');
    }
    

    setTimeout(()=>{
        firstNameField.classList.remove('shake');
        lastNameField.classList.remove('shake');
        emailField.classList.remove('shake');
        passwordField.classList.remove('shake');
    }, 500);

    //Input keyup

    firstNameInput.onkeyup = ()=>{
        if(firstNameInput.value == "") {
            firstNameField.classList.add('error');
        } else {
            firstNameField.classList.remove('error');
        }
    }

    lastNameInput.onkeyup = ()=>{
        if(lastNameInput.value == "") {
            lastNameField.classList.add('error');
        } else {
            lastNameField.classList.remove('error');
        }
    }


    emailInput.onkeyup = ()=>{
        emptyError();
        formatError();
        extraError();
    }

    passwordInput.onkeyup = ()=>{
        if(passwordInput.value == "") {
            passwordField.classList.add('error');
        } else {
            passwordField.classList.remove('error');
        }
    }

    // Submiting form when everything is all right

    if(!firstNameField.classList.contains("error") && 
        !lastNameField.classList.contains("error") &&
        !emailField.classList.contains("error") &&
        !emailField.classList.contains("emailError") &&
        !passwordField.classList.contains("error")) {

            //console.log('no errors');
            leftText.classList.add("removeItem");
            rightColumn.classList.add('removeItem');
            thankyouText.classList.remove('removeItem');
    }
}


// Email error functions

function emptyError() {
    if(emailInput.value == "") {
        emailField.classList.add('error');
        //console.log("empty error");
    } else {
        emailField.classList.remove('error');
    // console.log('else of empty error');
    }
}

function formatError() {
    if(!emailInput.value.match(pattern)) {
    emailField.classList.add('emailError');
    //console.log('format error');
    } else {
    emailField.classList.remove('emailError');
    //console.log('else of format error');
    }
}

function extraError() { //This function removes the format error when the content is deleted
    if((emailInput.value == "")) {
        emailField.classList.remove('emailError');
    }
}