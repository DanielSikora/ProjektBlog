import React, { useState } from 'react';

const PostForm = () => {
   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      const post = { title, content };

      fetch('http://localhost:3000/posts', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(post),
      })
         .then((response) => response.json())
         .then((data) => {
            console.log('Success:', data);
            setTitle('');
            setContent('');
         })
         .catch((error) => console.error('Error:', error));
   };

   return (
      <form onSubmit={handleSubmit}>
         <div>
            <label>Tytuł:</label>
            <input
               type="text"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               required
            />
         </div>
         <div>
            <label>Treść:</label>
            <textarea
               value={content}
               onChange={(e) => setContent(e.target.value)}
               required
            />
         </div>
         <button type="submit">Dodaj post</button>
      </form>
   );
};

export default PostForm;
