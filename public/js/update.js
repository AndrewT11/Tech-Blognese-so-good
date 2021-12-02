const updateFormHandler = async (event) => {
  event.preventDefault();

  const update = document.querySelector('#comment-desc').value.trim();
  const postID = window.location.href[window.location.href.length - 1];

  if (content) {
    const response = await fetch('/api/posts/' + postID, {
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
  .querySelector('.update-form')
  .addEventListener('submit', updateFormHandler);
