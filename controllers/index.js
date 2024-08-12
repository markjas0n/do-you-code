const router = require("express").Router();

// Import all of the routes from controllers here
const homeRoutes = require("./homeRoutes");
const apiRoutes = require("./api");
const pageOneRoutes = require("./pageOneRoutes");
const searchRoutes = require("./searchRoute");


// Connect the routes to the router here
router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/pageOne", pageOneRoutes);
router.use("/search", searchRoutes); 


module.exports = router;
