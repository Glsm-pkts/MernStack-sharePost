const express = require('express');
const { createPost, updatePost, deletePost, getPosts } = require('../controllers/post.js');
const router = express.Router();

router.get('/getPosts', getPosts);
router.post('/createPost', createPost);
router.patch('/updatePost/:id', updatePost); // `:id` parametresi doğru
router.delete('/deletePost/:id', deletePost);

module.exports = router;
