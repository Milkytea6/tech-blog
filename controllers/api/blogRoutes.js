const router = require('express').Router();


const { User } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll(req.body);
        res.status(200).json(userData);

    }
    catch (err) {
        res.status(400).json(err);
    }
});d

module.exports = router;