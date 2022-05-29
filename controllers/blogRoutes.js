//required modules
const router = require('express').Router();
const { Blog, User, Comment } = require('../models');

//get blogs by id and include comments
router.get('/:id', async (req, res) => {

    const getBlog = await Blog.findByPk(req.params.id, {
        include: [{
            model: User,
            attributes: ['name']
        }
        ]
    },
    );
    // console.log(getBlog);
    //include comments where their blog id is equal to the request parameters
    const blogCommentData = await Comment.findAll({ where: { blog_id: req.params.id } });

    // console.log(blogCommentData, "line 56");

    const blogComments = blogCommentData.map((comment) => comment.get({ plain: true }));
    //render the blog post and comments
    const blogPost = await getBlog.get({ plain: true });
    const loggedIn = req.session.loggedIn;
    res.render('blog', {
        loggedIn,
        blogPost,
        blogComments
    })

});

module.exports = router;