const router = require('express').Router();

router.get('/', (req, res) => {
    try {
        req.session.destroy();
        res.render('login');
    } catch (error) {
        console.log('Failed to get login route.')
        res.status(500).json(error);
    }
});
module.exports = router;
