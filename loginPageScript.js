document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginStatus = document.getElementById('login-status');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;

        if (enteredUsername === 'admin' && enteredPassword === 'admin') {
            loginStatus.textContent = 'Login Successful!';
            loginStatus.style.color = '#007BFF';
        } else {
            loginStatus.textContent = 'Incorrect username or password.';
            loginStatus.style.color = '#ff0000';
        }
    });
});