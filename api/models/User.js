const { Sequelize } = require("sequelize");
const sequelize = require("../db/db.js");
const Nationality = require("./nationality.js");


const User = sequelize.define(
    "user",
    {
        UserID: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        FirstName: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        LastName: {
            type: Sequelize.STRING(50),
            allowNull: false,
        },
        Email: {
            type: Sequelize.STRING(50),
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        NationalityID: {
            type: Sequelize.INTEGER,
            allowNull: true,
        }
    },
    {
        tableName: "User",
    }
);

/////////////////////////////
// Foreign keys
/////////////////////////////

// one to many categories and tags

/* Nationality.hasMany(User, {
    as: "nationality-user",
    foreignKey: "category_id",
});
 */
User.belongsTo(Nationality, {
    as: "user-nationality",
    foreignKey: "NationalityID",
});

module.exports = User;