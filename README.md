# Tech Blog
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)

A CMS-style tech-centered blog site where registered users can write posts about anything and everything tech-related! Users are able to edit or delete exisiting posts as well as create, edit and delete comments on posts. The app also authenticates users so only registered accounts can login and create posts or comments.

## Table of Contents

* [Technologies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [Live Demo](#live-demo)
* [Resources](#resources)
* [License](#license)
* [Contact](#contact)

## Technologies
This application was built using the following technologies and languages:
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [Handlebars](https://handlebarsjs.com/)
* [MySQL 2 NPM](https://www.npmjs.com/package/mysql2)
* [Sequelize](https://sequelize.org/)
* [dotenv NPM](https://www.npmjs.com/package/dotenv)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [Insomnia](https://insomnia.rest/)
* [Express-session](https://www.npmjs.com/package/express-session)
* [Connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)
* [Skeleton](http://getskeleton.com/)
* HTML
* CSS
* JavaScript
* SQL (via Sequelize)
* Deployed on [Heroku](https://heroku.com/)

## Installation
Since this [application is deployed on Heroku](https://salty-citadel-76451.herokuapp.com), there's no need to download and install anything.

But if you wanted to, [clone the Tech Blog repo](https://salty-citadel-76451.herokuapp.com) and then install the dependencies. To install the dependencies included in this repo, navigate to the root directory of the cloned or downloaded repo. In either your terminal, command line or using the integrated terminal in your code editor of choice, enter the following command:

`npm i`

OR

`npm install`

If you're including the `package-lock.json` file from this repo in your own files, then run the following command instead:

`npm ci`

## Usage

To use the tech-blog if you've cloned the repo, you'll need to source the database in your SQL database by navigating to the db folder. Then access your SQL database and enter:

`SOURCE schema.sql`

Next, to begin the application enter:

`npm start`

You can then make posts etc in your browser at the localhost URL.

## Live Demo
You can checkout the live application over at [salty-citadel on Heroku](https://salty-citadel-76451.herokuapp.com).

### Screenshot of the homepage:
![Static image of the application's homepage](/public/images/homepage.png)

### Screenshot of the signup page:
![Static image of the application's signup page](/public/images/signup.png)

### Gif of the sign-up and make comment pages:
![Animated gif of the application's login, signup and comment pages](/public/images/signup-and-comment-demo.gif)

## Resources
* [What is the Secret Key in express-session](https://forum.freecodecamp.org/t/what-is-the-secret-key-in-express-session/354972)
* [Document.referrer](https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer)
* [How can I see a page's referrer in Chrome](https://superuser.com/questions/231540/how-can-i-see-a-pages-referrer-in-chrome)
* [Node express cannot GET route](https://stackoverflow.com/questions/38906961/node-express-cannot-get-route)
* [Sequelize don't return password](https://stackoverflow.com/questions/27972271/sequelize-dont-return-password)
* [Sequelize scopes](https://sequelize.org/docs/v6/other-topics/scopes/)
* [Sequelize convert entity to plain object](https://stackoverflow.com/questions/21961818/sequelize-convert-entity-to-plain-object)
* [Sequelize documentation](https://sequelize.org/docs/v6/getting-started/)
* [Getting the last element of a split string array](https://stackoverflow.com/questions/651563/getting-the-last-element-of-a-split-string-array)
* [Handlebars Documentation](https://handlebarsjs.com/guide/#what-is-handlebars)
* [Deploy with Heroku and MySQL](https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql)
* [Heroku giving 500 error](https://stackoverflow.com/questions/46021463/heroku-giving-500-error-with-little-information-internal-server-error)
* Week 14 class notes and recordings

## License

This project is covered under the [MIT license](https://github.com/jazzberriess/employee-management-system/blob/main/LICENSE)

&copy; 2022 Christi Scappatura

## Contact
Contact [Christi on GitHub](https://github.com/jazzberriess)
