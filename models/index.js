const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// User can have many posts and comments
User.hasMany(Post, {
  foreignKey: 'user_id'
});
User.hasMany(Comment, {
  foreignKey: 'user_id'
});
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});
// Post can have many comment and is related to user
Post.hasMany(Comment, {
  foreignKey: 'post_id'
});
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});
Post.belongsTo(User, {
  foreignKey: 'user_id'
});

// Comment is related to a user and a post
// Added model exports
module.exports = { User, Post, Comment };