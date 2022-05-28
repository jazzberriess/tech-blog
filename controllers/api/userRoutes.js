const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../models');

router.post('/new-user', async (req, res) => {

    try {
        const userData = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10),
        })
        console.log(userData)
        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.loggedIn = true;
            res.status(200).json({ userData, message: "You are now logged in!" });
            console.log(req.session);
            console.log(req.session.loggedIn)
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
            res.status(400).json({ message: "Invalid username or password. Please try again." });
            return;
        }

        const passwordVal = await bcrypt.compare(
            req.body.password,
            userData.password,
        );

        console.log(req.body.password);
        console.log(userData.password);
        console.log(passwordVal);

        if (!passwordVal) {
            res.status(400).json({ message: "Invalid username or password. Please try again." });
            return;
        }

        req.session.save(() => {
            req.session.userId = userData.id;
            req.session.loggedIn = true;

            res.status(200).json({ userData, message: "You are now logged in!" })
        });

    } catch (error) {
        res.status(400).json(error);
        console.log(error);
    }
});

router.post('/logout', (req, res) => {

    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).send({ message: "You are now logged out!" });
        });
    } else {
        res.status(404).send();
    }

    // if (req.session.loggedIn) {
    //     req.session.destroy(() => {
    //         res.status(204).end({ userData, message: "You are now logged out!" });
    //     });
    // } else {
    //     res.status(404).end();
    // }
});

module.exports = router;