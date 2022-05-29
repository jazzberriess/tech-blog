// const logoutButton = document.getElementById("logout");

const logout = async (event) => {
    event.preventDefault();
    console.log("click!");
    try {
        const res = await fetch('/api/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });

        if (res.ok) {
            document.location.replace('/');
        } else {
            alert(res.statusText)
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

document.querySelector('#logout-button').addEventListener('click', logout);