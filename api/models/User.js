const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");
const Nationality = require("./nationality.js");
const Language = require("./language.js");

const User = sequelize.define(
    "user",
    {
        UserID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        FirstName: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        LastName: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        Email: {
            type: DataTypes.STRING(50),
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        NationalityID: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    },
    {
        tableName: "User",
        timestamps: false
    }
);

/////////////////////////////
// Foreign keys
/////////////////////////////

// one to many categories and tags

/* 
Nationality.hasMany(User, {
    as: "nationality-user",
    foreignKey: "category_id",
});
 */

/* Language.belongsToMany(User, { 
    as: "user-language",
    through: 'UserLanguage'
});
 */
User.belongsTo(Nationality, {
    as: "user-nationality",
    foreignKey: "NationalityID",
});


User.belongsToMany(Language, { 
    as: "Languages",
    through: 'UserLanguage',
    uniqueKey: 'UserLanguageID',
    foreignKey: 'UserID',
    otherKey: 'LanguageID'
});

module.exports = User;