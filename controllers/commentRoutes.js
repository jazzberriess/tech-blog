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

router.get('/:id', async (req, res) => {
    if (req.session.loggedIn) {
        const userCommentData = await Comment.findOne({ where: { id: req.params.id }, raw: true })
        // const userPostData = await Blog.findAll();
        console.log(userCommentData, "line 33");
        console.log(req.session.userId, "line 34");

        // const userPosts = userPostData.map((blog) => blog.get({ plain: true }));
        // console.log(userPosts, "line 12");
        // console.log(userPosts.title, "line 14");
        return res.render('comment', {
            userCommentData
        })

    };
});

router.put('/:id', async (req, res) => {
    const user_id = req.session.userId;
    // const id = req.params.id;
    const { comment } = req.body;
    console.log(req.body);

    try {
        const updateComment = await Comment.update({

            comment,
            user_id,
        },
            {
                where: {
                    id: req.params.id,
                }
            })
        res.status(200).json(updateComment);
        console.log(updateComment, "line62");
    } catch (error) {
        res.status(500).json(error);
        console.log(error);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const destroyComment = await Comment.destroy({
            where: {
                id: req.params.id
            },
        });
        res.status(200).json(destroyComment);
    } catch (error) {
        res.status(400).json(error);
        console.log(error);
    }
})

module.exports = router;