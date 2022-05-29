// modules required for API routes
const router = require('express').Router();
const apiRoutes = require('./api');
const homepageRoutes = require('./homepageRoutes')
const dashboardRoutes = require('./dashboardRoutes');
const commentRoutes = require('./commentRoutes');
const blogRoutes = require('./blogRoutes');

router.use('/', homepageRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes)
router.use('/comment', commentRoutes);
router.use('/blog', blogRoutes);


module.exports = router;