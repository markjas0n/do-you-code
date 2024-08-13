const router = require("express").Router();

// import any models you plan to use for this data's routes here
const { Post, PostTag } = require("../../models");
const multer = require("multer");
const upload = multer({ dest: '../uploads/' });
// protects routes from non-logged in users
const { apiGuard } = require("../../utils/authGuard");

router.post("/", apiGuard, upload.single('screen'), (req, res) => {

  const title = req.body.title;
  const description = req.body.description;
  const project_link = req.body.link;
  const screenshot = req.file.path;
  const tagIds = req.body.tags;

  console.log(tagIds);
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


});

router.put("/:id", apiGuard, async (req, res) => {
  // try {
  //   const [updatedRows] = await Post.update(req.body, {
  //     where: {
  //       id: req.params.id,
  //     },
  //   });

  //   if (updatedRows > 0) {
  //     res.status(200).end();
  //   } else {
  //     res.status(404).end();
  //   }
  // } catch (err) {
  //   res.status(500).json(err);
  // }
  // update product data
  Post.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((post) => {
      if (req.body.tagIds && req.body.tagIds.length) {

        PostTag.findAll({
          where: { post_id: req.params.id }
        }).then((postTags) => {
          // create filtered list of new tag_ids
          const postTagIds = postTags.map(({ tag_id }) => tag_id);
          const newPostTags = req.body.tagIds
            .filter((tag_id) => !postTagIds.includes(tag_id))
            .map((tag_id) => {
              return {
                post_id: req.params.id,
                tag_id,
              };
            });

          // figure out which ones to remove
          const postTagsToRemove = postTags
            .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
            .map(({ id }) => id);
          // run both actions
          return Promise.all([
            ProductTag.destroy({ where: { id: postTagsToRemove } }),
            ProductTag.bulkCreate(newPostTags),
          ]);
        });
      }

      return res.json(post);
    })
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete("/:id", apiGuard, async (req, res) => {
  try {
    const [destroyedRows] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (destroyedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
