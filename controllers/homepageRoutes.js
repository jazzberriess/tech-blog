//required modules
const router = require('express').Router();
const { Blog } = require('../models');

//homepage route
router.get('/', async (req, res) => {
  try {
    //find all blogposts and populate the homepage
    const blogPosts = await Blog.findAll().catch((error) => {
      res.json(error);
    });

    const blogs = blogPosts.map((blog) => blog.get({ plain: true }));
    const loggedIn = req.session.loggedIn;
    // console.log(blogs, 'line 18');
    // console.log(blogs.name);
    //pass through the loggedIn status so handlebars can toggle the login/logout buttons, pass through the blogs so blogposts can be rendered
    return res.render('homepage', {
      loggedIn,
      blogs,
    });
    //error handling
  } catch (error) {
    res.status(500).json(error);
  }
});

//login page
router.get('/login', async (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  } catch (error) {
    console.log(error);
  }
});

//signup page
router.get('/signup', async (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('signup');
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
