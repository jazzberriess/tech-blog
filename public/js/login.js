//added login and sign-up boilerplate-style code from wk14 mini project
const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log("click");

    // Collect values from the login form. Trim trailing spaces.
    const email = document.querySelector('#email-input').value.trim();
    const password = document.querySelector('#password-input').value.trim();

    if (email && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

const registerFormHandler = async (event) => {
    event.preventDefault();
    console.log("click");

    const name = document.querySelector('#username-register').value.trim();
    const email = document.querySelector('#email-register').value.trim();
    const password = document.querySelector('#password-register').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/new-user', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

document
    .querySelector('.register-form')
    .addEventListener('submit', registerFormHandler);


// const logout = async () => {
//     const res = await fetch('api/users/logout', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' }
//     });

//     if (res.ok) {
//         document.location.replace('/');
//     } else {
//         alert(response.statusText)
//     }
// };

// document.querySelector('#logout').addEventListener('click', console.log("click"), logout);