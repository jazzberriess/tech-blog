const registerFormHandler = async (event) => {
    event.preventDefault();
    console.log("click");

    const name = document.querySelector('#username-register').value.trim();
    const email = document.querySelector('#email-register').value.trim();
    const password = document.querySelector('#password-register').value.trim();

    if (!name || !email || !password) {
        alert("Please enter a username, email and password.");
    }

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
    .querySelector('.register-form')
    .addEventListener('submit', registerFormHandler);
