const axios = require('axios');

// Function to fetch user data
async function fetchUsers() {
  try {
    const response = await axios.get('https://dummyjson.com/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

// Function to fetch user posts by user ID
async function fetchUserPosts(userId) {
  try {
    const response = await axios.get(`https://dummyjson.com/posts/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user posts:', error);
  }
}

// Function to fetch post comments by post ID
async function fetchPostComments(postId) {
  try {
    const response = await axios.get(`https://dummyjson.com/posts/${postId}/comments`);
    return response.data;
  } catch (error) {
    console.error('Error fetching post comments:', error);
  }
}

// Function to format the data as requested
async function formatData() {
  const users = await fetchUsers();
  const formattedData = [];
   const data = users?.users?.slice(0 , 3)
  for (const user of data) {
    const userData = {
      id: user.id,
      fullname: user.name,
      age: user.age,
      gender: user.gender,
      email: user.email,
      birthDate: user.birthDate,
      posts: [],
    };

    const userPosts = await fetchUserPosts(user.id);

    for (const post of userPosts?.posts) {
      const postComments = await fetchPostComments(post.id);

      const formattedPost = {
        id: post.id,
        title: post.title,
        body: post.body,
        comments: postComments?.comments,
      };

      userData.posts.push(formattedPost);
    }

    formattedData.push(userData);
  }

  return formattedData;
}

// Call the formatData function and log the result
console.time('doSomething')
formatData()
  .then((result) => {
    console.log(JSON.stringify(result, null, 2));
    console.timeEnd('doSomething')
  })
  .catch((error) => {
    console.error('Error formatting data:', error);
  });
