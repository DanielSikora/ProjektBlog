const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postsRoutes = require('./routes/posts');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://Daniel:daniel12@posts.y9xo7.mongodb.net/?retryWrites=true&w=majority&appName=Posts')
   .then(() => console.log('Połączono z MongoDB'))
   .catch(err => console.error(err));

app.use('/posts', postsRoutes);

app.listen(3000, () => {
   console.log('Serwer działa na porcie 3000');
});
