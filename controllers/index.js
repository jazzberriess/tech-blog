// modules required for API routes
const router = require('express').Router();
const apiRoutes = require('./api');
const homepageRoutes = require('./homepageRoutes')
const dashboardRoutes = require('./dashboardRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/', homepageRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes)
router.use('/comment', commentRoutes);


module.exports = router;