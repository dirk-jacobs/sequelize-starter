const { Sequelize } = require("sequelize");
const sequelize = require("../db/db.js");

const Language = sequelize.define(
    "Language",
    {
        LanguageID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        Language: {
            type: Sequelize.STRING(50),
            allowNull: false,
        }
    },
    {
        tableName: "Language",
        timestamps: false
    }
);


module.exports = Language;