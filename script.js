document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    function validateName() {
        const nameError = document.getElementById('nameError');
        if (nameInput.value.trim() === '') {
            nameError.style.display = 'block';
        } else {
            nameError.style.display = 'none';
        }
    }

    function validateEmail() {
        const emailError = document.getElementById('emailError');
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailInput.value.match(emailPattern)) {
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
        }
    }

    function validatePassword() {
        const passwordError = document.getElementById('passwordError');
        if (passwordInput.value.length < 8) {
            passwordError.style.display = 'block';
        } else {
            passwordError.style.display = 'none';
        }
    }

    nameInput.addEventListener('input', validateName);
    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);

    form.addEventListener('submit', function(event) {
        validateName();
        validateEmail();
        validatePassword();
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (nameInput.value.trim() === '' || !emailInput.value.match(emailPattern) || passwordInput.value.length < 8) {
            event.preventDefault();
        } else {
            event.preventDefault();
            const successMessage = document.createElement('div');
            successMessage.textContent = 'Thank you for submitting the form!';
            successMessage.style.color = 'green';
            successMessage.style.textAlign = 'center';
            successMessage.style.marginTop = '20px';
            successMessage.style.fontWeight = 'bold';
            form.appendChild(successMessage);

            nameInput.value = '';
            emailInput.value = '';
            passwordInput.value = '';
        }
    });
});
