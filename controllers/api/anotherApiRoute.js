const router = require("express").Router();

// Define your routes
router.get("/", (req, res) => {
    res.send("anotherApiRoute response");
});

module.exports = router;
