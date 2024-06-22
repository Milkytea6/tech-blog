const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {

}
// User will have an id, username, email, password
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isStrongPassword(value) {
                    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i.test(value)) {
                        throw new Error('Password must be at least 8 characters long and contain at least one digit, one lowercase letter, and one uppercase letter.');
                    }
                }
            },
        },     
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
}
);
module.exports = User;