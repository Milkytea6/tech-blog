const router = require('express').Router();
const withAuth = require('../../utils/auth');

const { User, Post } = require('../../models');

router.get('/', withAuth, async (req, res) => {
    const isLoggedIn = Boolean(req.session.logged_in);
    try {
        const posts = await Post.findAll();
        const postData = posts.map((post) => post.get());
       res.render('dashboard', { isLoggedIn, postData});
    }
    catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    console.log(req.body);
    try {
        const newPost = await Post.create(req.body);
        console.log(newPost);
        res.status(200).json( {message: 'Post created.'} );
    }
    catch (error) {
        console.log('Failed to create post.', error);
    }
})

module.exports = router;