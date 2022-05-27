const router = require('express').Router();
const { User, Blog } = require('../models');

router.get('/', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            const userPostData = await Blog.findAll({ where: { user_id: req.session.userId } })
            console.log(userPosts);

            const userPosts = userPostData.map((blog) => blog.get({ plain: true }));
            console.log(userPosts);
            console.log(userPosts.name);
            return res.render('dashboard', {
                userPosts
            })
        }
    } catch (error) {
        res.status(500).json(error);
    }
});



module.exports = router;