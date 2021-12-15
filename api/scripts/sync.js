const sequelize = require("../db/db.js");

// Just to load the different models in Sequelize
const User = require("../models/user");
const Nationality = require("../models/nationality");
const Language = require("../models/language");

// create tables
const createTables = async () => {
  const result = await sequelize.sync({ force: true });
};

createTables().then(() => {
  process.exit();
});