const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");

const Nationality = sequelize.define(
    "Nationality",
    {
        NationalityID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        Country: {
            type: DataTypes.STRING(50),
            allowNull: false,
        }
    },
    {
        tableName: "Nationality",
        timestamps: false
    }
);


module.exports = Nationality;