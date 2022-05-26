const router = require('express').Router();
const { Blog, User } = require('../models');

router.get('/', async (req, res) => {
    try {
        const blogPosts = await Blog.findAll({
            include: [
                {
                    model: User
                }
            ]
        });

        const blogs = blogPosts.map((blog) => blog.get({ plain: true }));
        res.render('homepage', {
            blogs
        })
    } catch (error) {
        res.status(500).json(error)

    }

});

module.exports = router;