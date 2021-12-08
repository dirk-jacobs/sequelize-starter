const { Sequelize } = require("sequelize");
const sequelize = require("../db/db.js");
const User = require("./user.js");
const Language = require("./language.js");

const UserLanguage = sequelize.define(
    "UserLanguage",
    {   UserLanguageID: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        UserID: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        LanguageID: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        Level: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    },
    {
        tableName: "UserLanguage",
        timestamps: false
    }
);

module.exports = UserLanguage;