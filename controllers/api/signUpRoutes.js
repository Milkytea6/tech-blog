const router = require('express').Router();
const { User } = require('../../models');

router.get('/', (req, res) => {
    try {
        res.render('signUp');
    } catch (error) {
        console.log('Failed to get signUp route.')
        res.status(500).json(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(200).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Failed to create new user', error);
        res.status(500).json({message: 'failed to create user'});
    }
});

module.exports = router;