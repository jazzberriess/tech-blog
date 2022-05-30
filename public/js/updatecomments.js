//update comments

const updateCommentHandler = async (event) => {
  event.preventDefault();

  const comment = document.querySelector('#updated-comment').value.trim();
  //get the darn comment_id from the URL by splitting to string and grabbing the last element from the array using pop
  const comment_id = window.location.toString().split('/').pop();

  // console.log(comment, 'line 7');
  //put request to update comment
  const res = await fetch(`/comment/${comment_id}`, {
    method: 'PUT',
    body: JSON.stringify({ comment }),
    headers: { 'Content-Type': 'application/json' },
  });
  if (res.ok) {
    //load the referring page so that the path /blog/blog_id loads!!!
    document.location.replace(document.referrer);
  } else {
    alert(res.statusText);
  }
};

//event listener for the submit button
document
  .querySelector('.update-comment')
  .addEventListener('submit', updateCommentHandler);

//delete comment

const deleteCommentHandler = async (event) => {
  event.preventDefault();
  //get the darn comment_id from the URL by splitting to string and grabbing the last element from the array using pop
  const comment_id = window.location.toString().split('/').pop();

  //delete request
  const res = await fetch(`/comment/${comment_id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  if (res.ok) {
    //load the referring page so that the path /blog/blog_id loads!!!
    document.location.replace(document.referrer);
  } else {
    alert(res.statusText);
  }
};

//event listener for the delete button
document
  .querySelector('#delete-button')
  .addEventListener('click', deleteCommentHandler);
