const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {

    try {
        const userData = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        console.log(userData)
        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.loggedIn = true;

            res.status(200).json({ userData, message: "You are now logged in!" });
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } })
        console.log(userData);

        if (!userData) {
            res.status(400).json({ message: "Invalid username or password. Please try again." })
        }
        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.loggedIn = true;

            res.status(200).json({ userData, message: "You are now logged in!" })
        })

    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports = router;