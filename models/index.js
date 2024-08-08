// import all models here
const User = require("./User");
const Post = require("./Post");
const Tag = require('./Tag');
const PostTag = require('./PostTag')

// Reminder- create any additional associations here
Post.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

User.hasMany(Post, {
  foreignKey: "userId",
});

// Products belongToMany Tags (through ProductTag)
Post.belongsToMany(Tag, {
  through: {
    model: PostTag,
    unique: false
    
  }
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Post, {
  through: {
    model: PostTag,
    unique: false
  }
});

// export all models here
module.exports = { User, Post, Tag, PostTag };
