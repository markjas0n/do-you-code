const router = require("express").Router();

// Import API route files
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");

// Import API route files

// Connect the routes to the router here
router.use("/users", userRoutes);
router.use("/posts", postRoutes);


module.exports = router;
