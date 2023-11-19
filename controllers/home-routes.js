const router = require('express').Router();
// const homeRoutes = require('./home-routes.js');

// router.use('/', homeRoutes);

router.get('/', (req, res) => {
    try {
        res.render('homepage');
    }   catch (err) {
        res.status(500).json(err);
    }});


module.exports = router;
