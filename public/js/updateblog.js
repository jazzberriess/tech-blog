//update blog
const updateBlogHandler = async (event) => {
  event.preventDefault();

  try {
    const title = document.getElementById('blog-title-input').value.trim();
    const description = document.getElementById('blog-content-input')
      .value.trim();
    //get the darn blog_id from the URL by splitting to string and grabbing the last element from the array using pop
    const blog_id = window.location.toString().split('/').pop();

    //put request to update blog post
    const res = await fetch(`/dashboard/blog/${blog_id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, description }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      //load the dashboard
      document.location.replace('/dashboard');
    } else {
      alert(res.statusText);
    }
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
};

//event listener for submit button
document
  .querySelector('.update-blog-post')
  .addEventListener('submit', updateBlogHandler);

// delete blog post
const deleteBlogHandler = async (event) => {
  event.preventDefault();

  try {
    //get the darn blog_id from the URL by splitting to string and grabbing the last element from the array using pop
    const blog_id = window.location.toString().split('/').pop();

    const res = await fetch(`/dashboard/blog/${blog_id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    if (res.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(res.statusText);
    }
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
};

//event listener for delete button
document
  .getElementById('delete-button').addEventListener('click', deleteBlogHandler);
