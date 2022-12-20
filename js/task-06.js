const inputForm = document.querySelector('#validation-input');
const dataLength = inputForm.dataset.length;


inputForm.addEventListener('blur', verificationLength);

function verificationLength(event) {
    const formValue = event.currentTarget.value;

    formValue.length == dataLength 
        ? inputForm.classList.add('valid') || inputForm.classList.remove('invalid') 
        : inputForm.classList.add('invalid') || inputForm.classList.remove('valid');
}
