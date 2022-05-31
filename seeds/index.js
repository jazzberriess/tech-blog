//setting up sequelize for seed data

const sequelize = require('../config/connection');
const seedBlog = require('./seedBlog');
const seedUser = require('./seedUser');

const seedDb = async () => {
  await sequelize.sync({ force: true });
  await seedUser();
  await seedBlog();
  process.exit(0);
};

seedDb();
