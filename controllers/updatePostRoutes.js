const router = require("express").Router();
const { withGuard } = require("../utils/authGuard");
const { Tag, Post, PostTag } = require('../models/');

router.get("/:id", withGuard, async (req, res) => {
    try {
        const id = req.params.id;
        const postData = await Post.findOne({
            where: {id: id},
            include: [{model: Tag, through: PostTag}],
      });
  
      const post = postData.get({ plain: true });
  
      // Reminder- We're passing the examples data to the home handlebars template here!
      // Reminder- We're also passing the loggedIn status to the home template here so that we can conditionally render items if the user is logged in or not (like we do with the navbar using `{{if loggedIn}}`).
      res.render("updatePost", {
        post,
        loggedIn: req.session.logged_in,
        username: req.session.username,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = router;