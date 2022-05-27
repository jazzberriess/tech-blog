const { User } = require("../models");

const userData = [
    {
        name: "Steve",
        email: "steve@email.com",
        password: "password1234"
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;


