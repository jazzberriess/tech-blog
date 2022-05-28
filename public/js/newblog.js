// const newBlogPost = document.querySelector('.new-blog-post');

const newBlogHandler = async (event) => {
    event.preventDefault();
    console.log('click!')

    const title = document.getElementById('#blog-title-input').value.trim();
    const description = document.getElementById('#blog-content-input').value.trim();

    console.log(title);
    console.log(description);
    const res = await fetch('/dashboard', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: { 'Content-Type': 'application/json' },
    })
    if (res.ok) {
        location.reload();
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-blog-post').addEventListener('submit', console.log('click!'), newBlogHandler);