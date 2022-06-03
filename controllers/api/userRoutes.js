//required modules
const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../models');

//new user route
router.post('/new-user', async (req, res) => {
  //create new username, password and hash the password
  try {
    const userData = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.loggedIn = true;
      res.status(200).json({ message: 'You are now logged in!' });
    });
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
});

//log in route
router.post('/login', async (req, res) => {
  try {
    const userData = await User.scope('withPassword').findOne({ where: { email: req.body.email } });
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Invalid username or password. Please try again.' });
      return;
    }
    //password validation
    const passwordVal = await bcrypt.compare(
      req.body.password,
      userData.password
    );

    if (!passwordVal) {
      res
        .status(400)
        .json({message: 'Invalid username or password. Please try again.' });
      return;
    }

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.loggedIn = true;

      res.status(200).json({message: 'You are now logged in!' });
    });
  } catch (error) {
    res.status(400).json(error);
    console.error(error);
  }
});

//logout route
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).send({ message: 'You are now logged out!' });
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
