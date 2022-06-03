//post a comment
const commentHandler = async (event) => {
  event.preventDefault();

  // const userName = document.getElementById('user-name-input').value.trim();
  const comment = document.getElementById('comment-text').value.trim();
  //get the darn blog_id from the URL by splitting to string and grabbing the last element from the array using pop
  const blog_id = window.location.toString().split('/').pop();

  if (comment && blog_id) {
    const response = await fetch('/comment', {
      method: 'POST',
      body: JSON.stringify({ comment, blog_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      //reload the page after posting a comment
      document.location.replace(`/blog/${blog_id}`);
    } else {
      alert("Oops! Sorry, we couldn't post your comment");
    }
  }
};

//event listener for the submit button on the form to post comment
document
  .querySelector('.comment-form')
  .addEventListener('submit', commentHandler);
