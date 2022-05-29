

const updateCommentHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector("#updated-comment").value.trim();
    const comment_id = window.location.toString().split('/').pop();

    // const blog_id = await Comment.findOne({ where: { id: comment_id } })

    console.log(comment, "line 7");

    const res = await fetch(`/comment/${comment_id}`, {
        method: 'PUT',
        body: JSON.stringify({ comment }),
        headers: { 'Content-Type': 'application/json' },
    })
    if (res.ok) {

        document.location.replace(document.referrer);
    } else {
        alert(res.statusText);
    }
};

document.querySelector('.update-comment').addEventListener('submit', updateCommentHandler);

const deleteCommentHandler = async (event) => {
    event.preventDefault();
    const comment_id = window.location.toString().split('/').pop();

    const res = await fetch(`/comment/${comment_id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })
    if (res.ok) {
        document.location.replace('/blog/');
    } else {
        alert(res.statusText);
    }
};

document.querySelector("#delete-button").addEventListener('click', deleteCommentHandler);
