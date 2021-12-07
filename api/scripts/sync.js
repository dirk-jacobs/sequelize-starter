const sequelize = require("../db/db.js");
const User = require("../models/user");
const Nationality = require("../models/nationality");
// create tables

const createTables = async () => {
  const result = await sequelize.sync({ force: true });
};

createTables().then(() => {
  process.exit();
});