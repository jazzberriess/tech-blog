const router = require('express').Router();
const { Blog, User } = require('../models');

router.get('/', async (req, res) => {
    try {
        // console.log(name);
        // res.render("homepage");

        // console.log(Blog, "line 7");
        const blogPosts = await Blog.findAll().catch((error) => {

            res.json(error);
            // include: [
            //     {
            //         model: Blog,
            //         attributes: ["name", "description"],
            //     }
            // ]
        });

        const blogs = blogPosts.map((blog) => blog.get({ plain: true }));
        console.log(blogs, "line 18");
        console.log(blogs.name);
        return res.render('homepage', {
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

router.get('/blog/:id', async (req, res) => {

    const getBlog = await Blog.findByPk(req.params.id, {
        include: [{
            model: User,
            attributes: ['name']
        }
        ]
    },
    )
    const blogPost = getBlog.get({ plain: true });
    res.render('blog', {
        blogPost
    })
});
module.exports = router;