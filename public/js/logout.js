//logout
const logout = async (event) => {
  event.preventDefault();
  console.log('click logout');

  const response = await fetch('/api/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    //load the homepage after successful logout
    document.location.replace('/');
  } else {
    alert('Oops!' + response.statusText);
  }
};

//event listener for logout button
document.getElementById('logout-button').addEventListener('click', logout);
