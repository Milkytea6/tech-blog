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
        const verifyName = await User.findOne({
            where: {
                name: req.body.name
            }
        });
        if (verifyName) {
            console.log(`User ${verifyName} already exists`);
            res.status(500).json({ message: 'failed to create user' });
        }
        else {
            const newUser = await User.create(req.body);
            console.log(newUser);

            req.session.save(() => {
                req.session.user_id = newUser.id;
                req.session.logged_in = true;

                res.status(200).json(newUser);
            });
            res.render('dashboard');
        }
    } catch (error) {
        console.error('Failed to create new user', error);
        res.status(500).json({ message: 'failed to create user' });
    }
});

module.exports = router;