const router = require('express').Router();

const { User, Post } = require('../../models');

router.get('/', async (req, res) => {
    try {

        const posts = await Post.findAll();
        console.log(posts);
        const postData = posts.map((post) => post.get());
        console.log(postData);

       res.render('dashboard', {postData});
    }
    catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;