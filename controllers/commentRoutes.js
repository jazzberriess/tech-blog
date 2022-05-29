const router = require('express').Router();
const { Blog, Comment } = require('../models')

router.post('/', async (req, res) => {

    try {
        const user_id = req.session.userId;
        // const blogId = ('/blog/:blog_id');
        const { userName, comment, blog_id } = req.body;
        // console.log(blogId);
        console.log(req.session.userId);
        const blogComment = await Comment.create({
            user_id,
            userName,
            comment,
            blog_id,
        })
        // console.log(BlogId, "line16");
        // console.log(blog_id, "line17");
        console.log(user_id, "line18");
        console.log(blogComment, "lin19");
        res.status(200).json(blogComment)
    } catch (error) {
        res.status(500).json(error);
        console.error(error);
    }
})

router.get('/blog/:id', async (req, res) => {

    // if (!req.session.loggedIn) {
    //     document.redirect('/login');
    // }

    try {
        // const blogCommentData = await Comment.findAll({ where: { blog_id: 2 } })
        // console.log(blogCommentData, "line 56");

        const blogCommentData = await Comment.findAll();

        console.log(blogCommentData, "line 56");

        const blogComments = blogCommentData.map((comment) => comment.get({ plain: true }));

        console.log(blogComments, "line60");
        return res.render('blog', {
            blogComments
        })

    } catch (error) {

    }
})

module.exports = router;