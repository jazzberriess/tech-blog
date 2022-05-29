const updateCommentHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector("#updated-comment").value.trim();
    const comment_id = window.location.toString().split('/').pop();

    console.log(comment, "line 7");

    const res = await fetch(`/comment/${comment_id}`, {
        method: 'PUT',
        body: JSON.stringify({ comment }),
        headers: { 'Content-Type': 'application/json' },
    })
    if (res.ok) {
        document.location.replace('/comment/1');
    } else {
        alert(res.statusText);
    }
};

document.querySelector('.update-comment').addEventListener('submit', updateCommentHandler);