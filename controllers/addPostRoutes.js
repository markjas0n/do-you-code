const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: '../uploads/'})
const { withGuard } = require("../utils/authGuard");

router.post('/', withGuard, upload.single('data-screenshot'), async (req, res) => {
    res.json('post successfully uploaded');
})
module.exports = router;