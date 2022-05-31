//required modules
const router = require('express').Router();
const { Blog } = require('../models');

router.get('/', async (req, res) => {
  try {
    //if user is logged in, populate their dashboard with their posts
    if (req.session.loggedIn) {
      const userPostData = await Blog.findAll({
        where: { user_id: req.session.userId },
      });

      const userPosts = userPostData.map((blog) => blog.get({ plain: true }));
      const loggedIn = req.session.loggedIn;

      return res.render('dashboard', {
        loggedIn,
        userPosts,
      });
    } else {
      //redirect user if not logged in
      res.redirect('/login');
    }
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
});

//get single blog by id
router.get('/blog/:id', async (req, res) => {
  try {
    if (req.session.loggedIn) {
      const userPostData = await Blog.findOne({
        where: { id: req.params.id },
        raw: true,
      });
      const loggedIn = req.session.loggedIn;

      return res.render('updateBlog', {
        loggedIn,
        userPostData,
      });
    } else {
      //redirect user if not logged in
      res.redirect('/login');
    }
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
});

//render create blog post page after clicking the create button
router.get('/blog', async (req, res) => {
  try {
    const loggedIn = req.session.loggedIn;
    res.render('newblogpost', {
      loggedIn,
    });
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
});

//create new blog post
router.post('/blog', async (req, res) => {

  try {
    const user_id = req.session.userId;
    const { title, description } = req.body;
    const newBlogPost = await Blog.create({
      title,
      description,
      user_id,
    });
    res.status(200).json(newBlogPost);
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
});

//update blog by id
router.put('/blog/:id', async (req, res) => {

  try {
    const user_id = req.session.userId;
    const { title, description } = req.body;
    const updateBlogPost = await Blog.update(
      {
        title,
        description,
        user_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(updateBlogPost);
    console.log(updateBlogPost);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

//delete blog by id
router.delete('/blog/:id', async (req, res) => {
  try {
    const destroyBlogPost = await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(destroyBlogPost);
  } catch (error) {
    res.status(400).json(error);
    console.error(error);
  }
});

module.exports = router;
