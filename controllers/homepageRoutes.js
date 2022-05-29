const router = require('express').Router();
const { Blog, User } = require('../models');

router.get('/', async (req, res) => {
    try {

        const blogPosts = await Blog.findAll().catch((error) => {

            res.json(error);
        });

        const blogs = blogPosts.map((blog) => blog.get({ plain: true }));
        const loggedIn = req.session.loggedIn;
        console.log(blogs, "line 18");
        console.log(blogs.name);
        return res.render('homepage', {
            loggedIn,
            blogs
        })

    } catch (error) {
        res.status(500).json(error)

    }

});

router.get('/login', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect('/');
            return;
        }
        res.render('login')
    } catch (error) {
        console.log(error)
    }

})

router.get('/signup', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect('/');
            return;
        }
        res.render('signup')
    } catch (error) {
        console.log(error)
    }

})

module.exports = router;