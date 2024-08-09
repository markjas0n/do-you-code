const router = require("express").Router();

// Import all of the routes from /api/ here
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
const tagRoutes = require("./tagRoutes");
const postTagRoutes = require("./postTagRoutes");

// Connect the routes to the router here
router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/tags", tagRoutes);
router.use("/posttags", postTagRoutes);

module.exports = router;
