const express = require('express');
const Post = require('../models/post');
const router = express.Router();

// Tworzenie nowego posta
router.post('/', async (req, res) => {
   const post = new Post({
      title: req.body.title,
      content: req.body.content
   });
   try {
      const savedPost = await post.save();
      res.status(201).json(savedPost);
   } catch (err) {
      res.status(400).json({ message: err.message });
   }
});

// Pobieranie wszystkich postów
router.get('/', async (req, res) => {
   try {
      const posts = await Post.find();
      res.json(posts);
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
});

// Pobieranie pojedynczego posta
router.get('/:id', async (req, res) => {
   try {
      const post = await Post.findById(req.params.id);
      res.json(post);
   } catch (err) {
      res.status(404).json({ message: err.message });
   }
});

// Aktualizacja posta
router.put('/:id', async (req, res) => {
   try {
      const post = await Post.findById(req.params.id);
      if (!post) return res.status(404).json({ message: 'Post nie znaleziony' });

      post.title = req.body.title;
      post.content = req.body.content;
      const updatedPost = await post.save();
      res.json(updatedPost);
   } catch (err) {
      res.status(400).json({ message: err.message });
   }
});

// Usunięcie posta
router.delete('/:id', async (req, res) => {
   try {
      const post = await Post.findById(req.params.id);
      if (!post) return res.status(404).json({ message: 'Post nie znaleziony' });

      await post.remove();
      res.json({ message: 'Post usunięty' });
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
});

module.exports = router;
