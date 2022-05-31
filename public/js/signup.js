const registerFormHandler = async (event) => {
  event.preventDefault();

  try {
    const name = document.getElementById('username-register').value.trim();
    const email = document.getElementById('email-register').value.trim();
    const password = document.getElementById('password-register').value.trim();

    if (!name || !email || !password) {
      alert('Please enter a username, email and password.');
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
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
};

document
  .querySelector('.register-form')
  .addEventListener('submit', registerFormHandler);
