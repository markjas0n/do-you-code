const router = require("express").Router();

// import any models you plan to use for this data's routes here
const { Tag } = require("../../models");

// protects routes from non-logged in users
const { apiGuard } = require("../../utils/authGuard");

router.post("/", apiGuard, async (req, res) => {
  try {
    const newTag = await Tag.create({
      ...req.body
    });
    res.json(newTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", apiGuard, async (req, res) => {
  try {
    const updatedTag = await Tag.update({
      ...req.body,
      where: {
        id: req.params.id
      }
    });
    if (!updatedTag) {
      res.status(404).json({ message: 'No Tag found with this id!' });
      return;
    }
    res.json(updatedTag);
  } catch (err) {
    res.status(500).json(err);
  }
}

);
router.delete('/:id', apiGuard, async (req, res) => {
  try {
    const deletedTag = await Tag.destroy({
      where: {
        id: req.params.id
      },
    });

    if (!deletedTag) {
      res.status(404).json({ message: 'No Tag found with this id!' });
      return;
    }

    res.status(200).json(deletedTag);
  } catch (err) {
    res.status(500).json(err);
  }
});