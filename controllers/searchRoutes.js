const router = require("express").Router();
const { User, Post, Tag, PostTag } = require("../models");

const { withGuard } = require("../utils/authGuard");

// Search by Username
router.get("/username/:username", withGuard, async (req, res) => {
  const username = req.params.username;
  console.log(username);
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
    console.log(postsExamples);
    res.render("home", {
      postsExamples,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Search by Tag Name
router.get("/tag/:tagName", async (req, res) => {
  try {
    const tagName = req.params.tagName;

    if (!tagName) {
      return res.status(400).json({ message: "No tag provided" });
    }

    // Find the tag
    const tag = await Tag.findOne({
      where: { name: tagName },
      include: [{ model: Post, include: [User] }],
    });

    if (!tag) {
      return res.status(404).json({ message: "Tag not found" });
    }

    const posts = tag.posts.map((post) => post.get({ plain: true }));

    res.render("home", {
      posts,
      loggedIn: req.session.logged_in,
      username: req.session.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
