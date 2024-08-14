const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: 'uploads/' });
const { withGuard } = require("../utils/authGuard");
const { Post } = require('../models/');

router.get('/', withGuard, async (req, res) => {

    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id,
            },
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('userPage', { posts });

    } catch (error) {
        res.status(500).json(err);
    }
});

module.exports = router;