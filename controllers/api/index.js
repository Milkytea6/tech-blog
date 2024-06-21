const router = require('express').Router();

const dashboardRoutes = require('./dashboardRoutes');
const loginRoutes = require('./loginRoutes');

router.use('/login', loginRoutes)
router.use('/dashboard', dashboardRoutes);

module.exports = router;