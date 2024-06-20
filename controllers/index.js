const router = require('express').Router();

const homepageRoutes = require('./homepageRoutes')
const apiRoutes = require('./api');
const loginRoutes = require('./loginRoutes');


router.use('/', homepageRoutes);
router.use('/login', loginRoutes)
router.use('/api', apiRoutes);

module.exports = router;