// document.addEventListener('DOMContentLoaded', function () {
//     const loginForm = document.getElementById('login-form');
//     const usernameInput = document.getElementById('username');
//     const passwordInput = document.getElementById('password');
//     const loginStatus = document.getElementById('login-status');

//     loginForm.addEventListener('submit', function (e) {
//         e.preventDefault();
//         const enteredUsername = usernameInput.value;
//         const enteredPassword = passwordInput.value;

//         if (enteredUsername === 'admin' && enteredPassword === 'admin') {
//             loginStatus.textContent = 'Login Successful!';
//             loginStatus.style.color = '#007BFF';
//         } else {
//             loginStatus.textContent = 'Incorrect username or password.';
//             loginStatus.style.color = '#ff0000';
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const messageDiv = document.getElementById('message');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const enteredUsername = usernameInput.value;
        const enteredPassword = passwordInput.value;
        loginContainer.style.display = 'none';
        if (enteredUsername === 'admin' && enteredPassword === 'admin') {
            // Display a success message
            messageDiv.style.display = 'block';
            messageDiv.textContent = 'Login Successful!';
            messageDiv.style.color = '#fff';
            messageDiv.style.background='#27AE60';
        } else {
            // Display an error message
            messageDiv.style.display = 'block';
            messageDiv.textContent = 'Incorrect username or password.';
            messageDiv.style.color = '#fff';
            messageDiv.style.background='#C0392B';
        }
    });
});
