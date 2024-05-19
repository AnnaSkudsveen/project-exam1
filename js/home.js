const

function getPosts() {
  try {
    fetch("https://v2.api.noroff.dev/blog/posts/AnnaSkudsveen")
      .then((response) => response.json())
      .then((data) => {
        showPosts(data);
      });
  } catch (error) {
    console.log("an error has happened");
  }
}

function showPosts(postData) {
  console.log(postData);

}

getPosts();