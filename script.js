const form = document.querySelector('.wrapper form');
const welcome = document.querySelector('.welcome');
const chooser = document.querySelector('.chooser');
const name = document.querySelector('.name');
const forgotPassword = document.querySelector('#forgotPassword');
const submitButton = document.querySelector('input[type="submit"]');
const nameInput = document.querySelector('input[type="text"]')

let menu = false;

function toggle(){
    form.classList.toggle('editedForm');
    welcome.classList.toggle('editedWelcome');
    chooser.classList.toggle('editedChooser');
    setTimeout(() => {
        if(!menu) {
            menu = true;
            name.innerHTML = 'Create Account';
            submitButton.innerHTML = 'SIGN UP';
            forgotPassword.style.display = 'none';
            nameInput.style.display = 'block';
        } else {
            menu = false;
            name.innerHTML = 'Sign In';
            submitButton.innerHTML = 'SIGN IN';
            forgotPassword.style.display = 'block';
            nameInput.style.display = 'none';
        }
    }, 155);
}