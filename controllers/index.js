// This file continues to route based on file path
const router = require("express").Router();
const homeRoutes = require("./home-routes.js");

router.use("/", homeRoutes);

module.exports = router;