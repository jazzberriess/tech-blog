const router = require('express').Router();
const { User, Blog } = require('../models');

router.get('/', async (req, res) => {
    try {
        //if user is logged in, populate their dashboard with their posts
        if (req.session.loggedIn) {
            const userPostData = await Blog.findAll({ where: { user_id: req.session.userId } })
            // const userPostData = await Blog.findAll();
            console.log(userPostData, "line 8");
            console.log(req.session.userId, "line 10");

            const userPosts = userPostData.map((blog) => blog.get({ plain: true }));
            console.log(userPosts, "line 12");
            console.log(userPosts.title, "line 14");
            return res.render('dashboard', {
                userPosts
            })
        } else {
            //redirect user if not logged in
            res.redirect('/login');
        }
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
});

//create new blog post
router.post('/blog', async (req, res) => {
    const user_id = req.session.userId;
    const { title, description } = req.body;
    console.log(user_id);

    try {
        const newBlogPost = await Blog.create({
            title,
            description,
            user_id
        })
        res.status(200).json(newBlogPost);
        console.log(newBlogPost);
    } catch (error) {
        res.status(400).json(error)
    }
});

module.exports = router;