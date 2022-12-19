const inputForm = document.querySelector('#validation-input');
const dataLength = inputForm.dataset.length;

inputForm.addEventListener('blur', verificationLength);

function verificationLength(event) {
    const formValue = event.currentTarget.value;
    console.log(formValue.length);

    if (formValue.length == 0) {
        inputForm.classList.remove('invalid', 'valid');
    } else if (formValue.length < dataLength) {
        inputForm.classList.add('invalid');
    } else {
        inputForm.classList.remove('invalid');
        inputForm.classList.add('valid');
    }
}
