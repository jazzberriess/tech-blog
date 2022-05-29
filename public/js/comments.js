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

        const res = await fetch(`/blog/${blog_id}`, {
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

