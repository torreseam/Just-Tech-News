// Once the routes are imported to server.js, they'll already be packaged and ready to go with this one file

const router = require('express').Router();

const apiRoutes = require('./api');

//Reference to  all of the user-facing routes, such as the homepage and login page
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes);

//the double usage of router.ue() is RESTful API practice
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

//dashboard  route
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/dashboard', dashboardRoutes);

module.exports = router;

