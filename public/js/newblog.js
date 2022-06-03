//new blog post fetch/post req
const newBlogHandler = async (event) => {
  event.preventDefault();

  const title = document.getElementById('blog-title-input').value.trim();
  const description = document.getElementById('blog-content-input').value.trim();

  //post request for new blog post
  const response = await fetch('/dashboard/blog', {
    method: 'POST',
    body: JSON.stringify({ title, description }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Oops! Unable to create blog post.');
  }
};

document
  .querySelector('.new-blog-post')
  .addEventListener('submit', newBlogHandler);
