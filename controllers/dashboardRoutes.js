const router = require('express').Router();
const { User, Blog } = require('../models');

router.get('/', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            const userPostData = await Blog.findAll({ where: { user_id: req.session.userId } })
            console.log(userPostData);

            const userPosts = userPostData.map((blog) => blog.get({ plain: true }));
            console.log(userPosts);
            console.log(userPosts.title);
            return res.render('dashboard', {
                userPosts
            })
        }
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
});

router.post('/', async (req, res) => {
    const user_id = req.session.user_id;
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