const commentHandler = async (event) => {

    event.preventDefault();

    try {
        const userName = document.querySelector('#user-name-input').value.trim();
        const comment = document.querySelector('#comment-text').value.trim();

        console.log(userName, "line9");
        console.log(comment, "line 10");

        const res = await fetch('/comment', {
            method: 'POST',
            body: JSON.stringify({ userName, comment }),
            headers: { 'Content-Type': 'application/json' },
        })
        if (res.ok) {
            document.location.reload();
        } else {
            alert(res.statusText);
        }

    } catch (error) {
        res.status(500).json(error);
        console.error(error);
    }
};

document.querySelector('.comment-form').addEventListener('submit', commentHandler);

