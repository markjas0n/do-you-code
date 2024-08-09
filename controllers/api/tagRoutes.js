const router = require("express").Router();

// import any models you plan to use for this data's routes here
const { Tag, Post } = require("../../models");

// protects routes from non-logged in users
const { apiGuard } = require("../../utils/authGuard");

router.post("/", apiGuard, async (req, res) => {
    try {
      const newTag = await Tag.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      res.json(newTag);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  