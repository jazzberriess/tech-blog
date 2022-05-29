const router = require('express').Router();
const { Comment } = require('../models')

router.post('/', async (req, res) => {

    try {
        const user_id = req.session.userId;
        const { comment, blog_id } = req.body;
        console.log(req.session.userId);
        const blogComment = await Comment.create({
            user_id,
            comment,
            blog_id,
        })
        console.log(user_id);
        console.log(blogComment);
        res.status(200).json(blogComment)
    } catch (error) {
        res.status(500).json(error);
        console.error(error);
    }
})

module.exports = router;