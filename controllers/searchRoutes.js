const router = require("express").Router();
const { User, Post, Tag, PostTag } = require("../models");
const { withGuard } = require("../utils/authGuard");

router.get("/:username", withGuard, async (req, res) => {
  const username = req.params.username;

  try {

    const user = await User.findOne({
      where: { username: username },
    });

    if (!user) {
      return res.status(404).render("home", {
        error: "User not found",
        loggedIn: req.session.logged_in,
      });
    }


    const posts = await Post.findAll({
      where: { userId: user.id },
      include: [{
        model: Tag,
        through: PostTag,
        
      }]
    });

    const userExamples = user.get({ plain: true });
    const postsExamples = posts.map(post => post.get({ plain: true }));

    res.render("home", {
      userExamples,
      postsExamples,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

