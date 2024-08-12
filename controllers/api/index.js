const router = require("express").Router();

// Import API route files
const someApiRoute = require("./someApiRoute");
const anotherApiRoute = require("./anotherApiRoute");

// Connect the API routes to the router
router.use("/someApi", someApiRoute);
router.use("/anotherApi", anotherApiRoute);

module.exports = router;
