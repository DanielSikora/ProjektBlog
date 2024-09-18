import React, { useEffect, useState } from 'react';

const PostList = () => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      fetch('http://localhost:3000/posts')
         .then((response) => response.json())
         .then((data) => setPosts(data))
         .catch((error) => console.error('Error:', error));
   }, []);

   return (
      <div>
         <h1>Posty na blogu</h1>
         <ul>
            {posts.map((post) => (
               <li key={post._id}>
                  <h2>{post.title}</h2>
                  <p>{post.content}</p>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default PostList;
