const updateFormHandler = async (event) => {
  event.preventDefault();

  const update = document.querySelector('#update').value.trim();
  const postID = window.location.href[window.location.href.length - 1];

  console.log(update);

  if (update) {
    const response = await fetch('/api/posts/' + postID, {
      method: 'POST',
      body: JSON.stringify({ update }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      //   document.location.replace('/posts/' + postID);
      document.location.reload();
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('#updatebtn')
  .addEventListener('click', updateFormHandler);
