//required modules
const router = require('express').Router();
const { Blog, User, Comment } = require('../models');
const userAuth = require('../utils/authentication');

//get blogs by id and include comments
router.get('/:id', userAuth, async (req, res) => {
  const verifiedId = req.session.userId;

  try {
    const getBlog = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name', 'id'],
        },
      ],
    });
    //include comments where their blog id is equal to the request parameters
    const blogCommentData = await Comment.findAll({
      where: { blog_id: req.params.id },
      include: [
        {
          model: User,
          attributes: ['name', 'id'],
        },
      ],
    });

    const blogComments = blogCommentData.map((comment) =>
      comment.get({ plain: true })
    );

    //render the blog post and comments
    const blogPost = await getBlog.get({ plain: true });
    const loggedIn = req.session.loggedIn;
    res.render('blog', {
      loggedIn,
      verifiedId,
      blogPost,
      blogComments,
    });
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
});

module.exports = router;
