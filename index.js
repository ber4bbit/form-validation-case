const form = document.forms['register-form'];
const inputs = Array.from(document.querySelectorAll('input'));
const submitBtn = document.getElementById('submitBtn');

inputs.map(input => input.getAttribute('data-is-valid')).includes('0') ? submitBtn.classList.add('disabled') : submitBtn.classList.remove('disabled');

const validateInput = (event) => {
    const inputValue = event.target.value;
    const inputName = event.target.getAttribute('name');
    const inputRegExp = new RegExp(event.target.getAttribute('data-regexp'));

    if (inputName === 'user-repassword') {
        inputValue === inputs[2].value && inputValue != ''
            ?
            (event.target.style.border = 'solid 1px green', event.target.setAttribute('data-is-valid', 1))
            :
            (event.target.style.border = 'solid 1px red', event.target.setAttribute('data-is-valid', 0)) 
    } else {
        inputRegExp.test(inputValue) && inputValue != ''
        ? 
        (event.target.style.border = 'solid 1px green', event.target.setAttribute('data-is-valid', 1)) 
        : 
        (event.target.style.border = 'solid 1px red', event.target.setAttribute('data-is-valid', 0));
    }
    inputs.map(input => input.getAttribute('data-is-valid')).includes('0') ? submitBtn.classList.add('disabled') : submitBtn.classList.remove('disabled');
}

const btnHandler = () => {
    inputs.forEach(input => {
        console.log(input.value);
    })
}

form.addEventListener('input', validateInput);
submitBtn.addEventListener('click', btnHandler);
