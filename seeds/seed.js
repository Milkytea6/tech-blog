const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');


const seedDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established.")
    } catch (error) {
        console.error("Error when establishing connection.")
    }
    try {
        await sequelize.sync({ force: true });

        const users = await User.bulkCreate(userData);
        const posts = await Post.bulkCreate(postData);
        const comments = await Comment.bulkCreate(commentData);
    
        // Associate posts with users
        posts.forEach(post => {
            const randomUserId = Math.floor(Math.random() * users.length);
            post.setUser(users[randomUserId]);
        });
    
        // Associate comments with posts and users
        comments.forEach(comment => {
            const randomPostId = Math.floor(Math.random() * posts.length);
            const randomUserId = Math.floor(Math.random() * users.length);
            comment.setPost(posts[randomPostId]);
            comment.setUser(users[randomUserId]);
        });
        console.log('Database successfully synchornized');
        
    } catch (error) {
        console.error('Error synchronizing the database', error);
    }

}
seedDatabase();