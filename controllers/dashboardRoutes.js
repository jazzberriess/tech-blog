const router = require('express').Router();
const { User, Blog, Comment } = require('../models');

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

router.get('/blog/:id', async (req, res) => {
    try {
        //if user is logged in, populate their dashboard with their posts
        if (req.session.loggedIn) {
            const userPostData = await Blog.findOne({ where: { id: req.params.id }, raw: true })
            // const userPostData = await Blog.findAll();
            console.log(userPostData, "line 8");
            console.log(req.session.userId, "line 10");

            // const userPosts = userPostData.map((blog) => blog.get({ plain: true }));
            // console.log(userPosts, "line 12");
            // console.log(userPosts.title, "line 14");
            return res.render('updateBlog', {
                userPostData
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
        res.status(500).json(error)
    }
});

router.put('/blog/:id', async (req, res) => {
    const user_id = req.session.userId;
    // const id = req.params.id;
    const { title, description } = req.body;

    try {
        const updateBlogPost = await Blog.update({
            title,
            description,
            user_id,
        },
            {
                where: {
                    id: req.params.id,
                }
            })
        res.status(200).json(updateBlogPost);
        console.log(updateBlogPost);
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
})

router.delete('/blog/:id', async (req, res) => {
    try {
        const destroyBlogPost = await Blog.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(destroyBlogPost);
    } catch (error) {
        res.status(400).json(error)
        console.error(error);
    }
})

module.exports = router;