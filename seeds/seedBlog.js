//seed data

const { Blog } = require('../models');

const blogData = [
  {
    title: 'Hello World',
    description: 'This is my first blog post! How exciting! I built this application all on my own.',
    user_id: '1',
  },
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;
