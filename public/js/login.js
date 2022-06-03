//added login and sign-up boilerplate-style code from wk14 mini project
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form. Trim trailing spaces.
  const email = document.getElementById('email-input').value.trim();
  const password = document.getElementById('password-input').value.trim();

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
      alert('Please enter a valid email address and password!');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
