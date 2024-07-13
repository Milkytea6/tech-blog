const router =require('express').Router();
const { User, Post, Comment } = require('../models');
router.get('/', async (req, res) => {
  const isLoggedIn = Boolean(req.session.logged_in);
  // use auth to create a variable called isLoggedIn to determine if user is logged in or not 
  try {
          const posts = await Post.findAll();
          const postData = posts.map((post) => post.get());
          console.log('homepage postData', { isLoggedIn, postData } );
          res.render('homepage', { isLoggedIn, postData});
  }
  catch {
        res.status(400).json(err);
  }
 
});
module.exports = router;