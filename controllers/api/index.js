const router = require("express").Router();

// Import API route files
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const tagRoutes = require("./tagRoutes");
const postTagRoutes = require("./postTagRoutes");
// Import API route files

// Connect the routes to the router here
router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/tags", tagRoutes);
router.use("/posttags", postTagRoutes);

module.exports = router;
