const router = require('express').Router();

const dashboardRoutes = require('./dashboardRoutes');
const loginRoutes = require('./loginRoutes');
const signUpRoutes = require('./signUpRoutes');

router.use('/login', loginRoutes)
router.use('/signUp', signUpRoutes)
router.use('/dashboard', dashboardRoutes);

module.exports = router;