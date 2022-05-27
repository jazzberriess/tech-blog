const { Blog } = require("../models");

const blogData = [
    {
        name: "Test Blog Post",
        description: "This is a test blog post because things weren't working.",
        user_id: "1"
    }
]

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;