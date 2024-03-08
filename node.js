const axios = require('axios');

// Function to fetch user data
async function fetchUsers() {
  try {
    const response = await axios.get('https://dummyjson.com/users');
    return response.data?.users;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

// Function to fetch user posts by user ID
async function fetchUserPosts(userId) {
  try {
    const response = await axios.get(`https://dummyjson.com/posts/user/${userId}`);
    return response.data?.posts;
  } catch (error) {
    console.error('Error fetching user posts:', error);
  }
}

// Function to fetch post comments by post ID
async function fetchPostComments(postId) {
  try {
    const response = await axios.get(`https://dummyjson.com/posts/${postId}/comments`);
    return response.data?.comments;
  } catch (error) {
    console.error('Error fetching post comments:', error);
  }
}

// Function to format a user's data
async function formatUserData(user) {
  const userData = {
    id: user.id,
    fullname: user.name,
    age: user.age,
    gender: user.gender,
    email: user.email,
    birthDate: user.birthDate,
  };

  const userPosts = await fetchUserPosts(user.id);
  userData.posts = await Promise.all(
    userPosts.map(async (post) => {
      const postComments = await fetchPostComments(post.id);
      return {
        id: post.id,
        title: post.title,
        body: post.body,
        comments: postComments,
      };
    })
  );

  return userData;
}

// Main function to format all user data
async function formatAllUserData() {
  const users = await fetchUsers();
  const no = users.slice(0, 3)
  return Promise.all(no.map((user) => formatUserData(user)));
}

// Call the formatAllUserData function and log the result
console.time('doSomething')
formatAllUserData()
  .then((result) => {
    console.log(JSON.stringify(result, null, 2));
    console.timeEnd('doSomething')
  })
  .catch((error) => {
    console.error('Error formatting data:', error);
  });
 
