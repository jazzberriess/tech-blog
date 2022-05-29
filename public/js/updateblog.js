const updateBlogHandler = async (event) => {

    event.preventDefault();

    const title = document.querySelector('#blog-title-input').value.trim();
    const description = document.querySelector('#blog-content-input').value.trim();
    const blog_id = window.location.toString().split('/').pop();

    const res = await fetch(`/dashboard/blog/${blog_id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description }),
        headers: { 'Content-Type': 'application/json' },
    })
    if (res.ok) {
        // location.reload();
        document.location.replace(`/dashboard`);
    } else {
        alert(res.statusText);
    }
};

document.querySelector('.update-blog-post').addEventListener('submit', updateBlogHandler);

const deleteBlogHandler = async (event) => {

    event.preventDefault();

    const blog_id = window.location.toString().split('/').pop();

    const res = await fetch(`/dashboard/blog/${blog_id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })
    if (res.ok) {
        // location.reload();
        document.location.replace(`/dashboard`);
    } else {
        alert(res.statusText);
    }
};

document.querySelector("#delete-button").addEventListener('click', deleteBlogHandler);
