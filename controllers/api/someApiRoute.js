const router = require("express").Router();

// Define your routes
router.get("/", (req, res) => {
    res.send("someApiRoute response");
});

module.exports = router;
