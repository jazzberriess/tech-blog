//new blog post fetch/post req

const newBlogHandler = async (event) => {
  event.preventDefault();
  // console.log('click!')

  const title = document.querySelector('#blog-title-input').value.trim();
  const description = document
    .querySelector('#blog-content-input')
    .value.trim();

  console.log(title, 'line 10');
  console.log(description, 'line 11');
  //post request for new blog post
  const res = await fetch('/dashboard/blog', {
    method: 'POST',
    body: JSON.stringify({ title, description }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (res.ok) {
    // location.reload();
    document.location.replace('/dashboard');
  } else {
    alert(res.statusText);
  }
};

document
  .querySelector('.new-blog-post')
  .addEventListener('submit', newBlogHandler);
