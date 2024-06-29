const router = require('express').Router();

const dashboardRoutes = require('./dashboardRoutes');
const loginRoutes = require('./loginRoutes');
const signUpRoutes = require('./signUpRoutes');
const logoutRoutes = require('./logoutRoutes');

router.use('/logout', logoutRoutes);
router.use('/login', loginRoutes)
router.use('/signUp', signUpRoutes)
router.use('/dashboard', dashboardRoutes);

module.exports = router;