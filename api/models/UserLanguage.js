const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");

const UserLanguage = sequelize.define(
    "UserLanguage",
    {   UserLanguageID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        UserID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        LanguageID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Level: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
    {
        tableName: "UserLanguage",
        timestamps: false
    }
);

module.exports = UserLanguage;