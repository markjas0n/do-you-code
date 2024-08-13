const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: 'uploads/' });
const { withGuard } = require("../utils/authGuard");
const { Tag, Post, PostTag } = require('../models/');



router.post('/', withGuard, upload.single('screen'), async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const project_link = req.body.link;
    const screenshot = req.file.path;
    const tagIds = req.body.tags;


    Post.create({ title, description, project_link, screenshot })
        .then((post) => {
            // if there's post tags, we need to create pairings to bulk create in the PostTag model
            if (tagIds) {
                const postTagIdArr = tagIds.map((tag_id) => {
                    return {
                        post_id: post.id,
                        tag_id,
                    };
                });
                return PostTag.bulkCreate(postTagIdArr);
            }
            // if no post tags, just respond
            res.status(200).json(post);
        })
        .then((postTagIds) => res.status(200).json(postTagIds))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
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