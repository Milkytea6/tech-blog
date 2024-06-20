const router =require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', (req, res) => {
    try{
        // const posts = await Post.findAll();

        // const postData = posts.map((post) => post.get({ plain: true }));
        res.render('homepage');
    }
    catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;