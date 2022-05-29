const commentHandler = async (event) => {

    event.preventDefault();

    try {
        const userName = document.querySelector('#user-name-input').value.trim();
        const comment = document.querySelector('#comment-text').value.trim();
        //get the darn blog_id from the URL by splitting to string and grabbing the last element from the array using pop
        const blog_id = window.location.toString().split('/').pop();

        console.log(userName, "line9");
        console.log(comment, "line 10");
        console.log(blog_id);

        const res = await fetch('/comment', {
            method: 'POST',
            body: JSON.stringify({ userName, comment, blog_id }),
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

// const updateCommentHandler = async (event) => {
//     event.preventDefault();

//     const updatedComment = document.querySelector("#updated-comment").value.trim();
//     const blog_id = window.location.toString().split('/').pop();

//     const res = await fetch(`/comment/${blog_id}`, {
//         method: 'PUT',
//         body: JSON.stringify({ updatedComment }),
//         headers: { 'Content-Type': 'application/json' },
//     })
//     if (res.ok) {
//         document.location.replace('/');
//     } else {
//         alert(res.statusText);
//     }
// };

// document.querySelector('.update-comment').addEventListener('submit', updateCommentHandler);