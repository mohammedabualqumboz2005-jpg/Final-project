AOS.init();


const originalValues = {
    name: "شيماء ناجي",
    email: "user.user@gmail.com",
    phone: "000 000 0000",
    password: "254861"
};


document.getElementById('saveBtn').addEventListener('click', function () {
    originalValues.name = document.getElementById('nameField').value;
    originalValues.email = document.getElementById('emailField').value;
    originalValues.phone = document.getElementById('phoneField').value;
    originalValues.password = document.getElementById('passwordField').value;

    alert('The changes have been saved successfully!');
});


document.getElementById('cancelBtn').addEventListener('click', function () {
    document.getElementById('nameField').value = originalValues.name;
    document.getElementById('emailField').value = originalValues.email;
    document.getElementById('phoneField').value = originalValues.phone;
    document.getElementById('passwordField').value = originalValues.password;

    alert('  The modifications were cancelled and the previous data was restored.  ');
});


const togglePassword = document.getElementById('togglePassword');
const passwordField = document.getElementById('passwordField');

togglePassword.addEventListener('click', function () {
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});





