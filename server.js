//required modules
const express = require('express');
const session = require('express-session');

//setting up sequelize and sequelize sessions
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//setting up express
const app = express();
const PORT = process.env.PORT || 3001;

//session set up
const sess = {
    secret: process.env.SESS_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

//middleware
app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//sync sequelize
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Houston we're live, listening on port ${PORT}`));
});
