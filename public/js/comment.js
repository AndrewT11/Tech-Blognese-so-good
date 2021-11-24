const commentFormHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector('#comment-desc').value.trim();
  const postID = window.location.href[window.location.href.length - 1];

  if (content) {
    const response = await fetch('/api/comments/' + postID, {
      method: 'POST',
      body: JSON.stringify({ content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/post/' + postID);
      //   document.location.reload()
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', commentFormHandler);
