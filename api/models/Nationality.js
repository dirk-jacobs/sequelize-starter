const { Sequelize } = require("sequelize");
const sequelize = require("../db/db.js");

const Nationality = sequelize.define(
    "Nationality",
    {
        NationalityID: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        Country: {
            type: Sequelize.STRING(50),
            allowNull: false,
        }
    },
    {
        tableName: "Nationality",
        timestamps: false
    }
);


module.exports = Nationality;