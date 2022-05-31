//required modules
const router = require('express').Router();
const { Comment } = require('../models');

//post route for comments
router.post('/', async (req, res) => {

  try {
    if (req.session.loggedIn) {
      const user_id = req.session.userId;
      const { userName, comment, blog_id } = req.body;

      const blogComment = await Comment.create({
        user_id,
        userName,
        comment,
        blog_id,
      });

      res.status(200).json(blogComment);
    } else {
      res.redirect('/login');
    }
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
});

//retrieve comment by id
router.get('/:id', async (req, res) => {

  try {
    if (req.session.loggedIn) {
      const userCommentData = await Comment.findOne({
        where: { id: req.params.id },
        raw: true,
      });
      const loggedIn = req.session.loggedIn;

      return res.render('comment', {
        loggedIn,
        userCommentData,
      });
    } else {
      res.redirect('/login');
    }
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }

});

//update comment by id
router.put('/:id', async (req, res) => {

  try {
    if (req.session.loggedIn) {
      const user_id = req.session.userId;
      const { comment } = req.body;

      const updateComment = await Comment.update(
        {
          comment,
          user_id,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json(updateComment);
    } else {
      res.redirect('/login');
    }
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
});

//delete comment by id
router.delete('/:id', async (req, res) => {

  try {
    if (req.session.loggedIn) {
      const destroyComment = await Comment.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json(destroyComment);
    } else {
      res.redirect('/login');
    }
  } catch (error) {
    res.status(400).json(error);
    console.error(error);
  }
});

module.exports = router;
