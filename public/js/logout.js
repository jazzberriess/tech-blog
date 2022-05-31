//logout

const logout = async (event) => {
  event.preventDefault();
  try {
    const res = await fetch('/api/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      //load the homepage after successful logout
      document.location.replace('/');
    } else {
      alert(res.statusText);
    }
    //error handling
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
};

//event listener for logout button
document.getElementById('logout-button').addEventListener('click', logout);
