//new blog post fetch/post req
const newBlogHandler = async (event) => {
  event.preventDefault();

  try {
    const title = document.getElementById('blog-title-input').value.trim();
    const description = document.getElementById('blog-content-input').value.trim();

    //post request for new blog post
    const res = await fetch('/dashboard/blog', {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(res.statusText);
    }

    //error handling
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
};

document
  .querySelector('.new-blog-post')
  .addEventListener('submit', newBlogHandler);
