//required modules
const express = require('express');
const session = require('express-session');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ defaultLayout: 'main' });
const routes = require('./controllers')

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

//middleware for session
app.use(session(sess));

//setting up handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')))

app.use(routes);

//sync sequelize
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Houston we're live! Listening on port ${PORT}`));
});
