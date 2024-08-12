const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: '../uploads/'})
const { withGuard } = require("../utils/authGuard");
const { Tag } = require('../models/');

router.post('/', withGuard, upload.single('data-screenshot'), async (req, res) => {
    res.json('post successfully uploaded');
})

router.get('/', withGuard, async (req, res) => {

    try {
        const tagData = await Tag.findAll();
        const tags = tagData.map((tag) => tag.get({ plain: true }));
        res.render('addpost', { tags });

    } catch (error) {
        res.status(500).json(err);
    }
});

module.exports = router;