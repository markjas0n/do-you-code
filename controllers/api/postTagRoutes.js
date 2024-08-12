const router = require('express').Router();
const { PostTag } = require('../../models');

// CREATE a PostTag
router.post('/', async (req, res) => {
    try {
        const postTagData = await PostTag.create(req.body);
        res.status(200).json(postTagData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// DELETE a PostTag
router.delete('/:id', async (req, res) => {
    try {
        const postTagData = await PostTag.destroy({
            where: { id: req.params.id }
        });
        if (!postTagData) {
            res.status(404).json({ message: 'No PostTag with this id!' });
            return;
        }
        res.status(200).json(postTagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;