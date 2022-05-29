const router = require('express').Router();
const { Blog, User, Comment } = require('../models');

router.get('/:id', async (req, res) => {

    const getBlog = await Blog.findByPk(req.params.id, {
        include: [{
            model: User,
            attributes: ['name']
        }
        ]
    },
    );
    console.log(getBlog);
    const blogCommentData = await Comment.findAll({ where: { blog_id: req.params.id } });

    console.log(blogCommentData, "line 56");

    const blogComments = blogCommentData.map((comment) => comment.get({ plain: true }));

    const blogPost = getBlog.get({ plain: true });
    res.render('blog', {
        blogPost,
        blogComments
    })

});

module.exports = router;