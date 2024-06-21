const router =require('express').Router();

router.get('/', (req, res) =>{
    try {
        res.render('login');
        console.log('Rendered login.')
    } catch (error) {
        console.log('Failed to get login route.')
        res.status(500).json(error);
    }
});

module.exports = router;