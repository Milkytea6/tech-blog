const router =require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
          const posts = await Post.findAll();
          const postData = posts.map((post) => post.get());
          res.render('homepage', {postData});
  }
  catch {
        res.status(400).json(err);
  }
 
});
module.exports = router;