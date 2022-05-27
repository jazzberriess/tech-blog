const logoutButton = document.getElementById("logout");

const logout = async () => {
    console.log(loggedIn);
    console.log("click!");

    const res = await fetch('/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });

    if (res.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText)
    }
};

logoutButton.addEventListener('click', console.log("click"), logout);