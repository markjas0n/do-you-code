const router = require("express").Router();
const { Tag } = require('../models/');
const { withGuard } = require("../utils/authGuard");


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