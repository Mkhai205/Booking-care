"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User.hasMany(models.History, { foreignKey: "patientId" });
            User.hasMany(models.History, { foreignKey: "doctorId" });
            User.hasMany(models.Booking, { foreignKey: "patientId" });
            User.hasMany(models.Booking, { foreignKey: "doctorId" });
            User.belongsTo(models.Allcode, {
                foreignKey: "positionId",
                targetKey: "key",
                as: "positionData",
            });
            User.belongsTo(models.Allcode, {
                foreignKey: "gender",
                targetKey: "key",
                as: "genderData",
            });
            User.belongsTo(models.Allcode, {
                foreignKey: "roleId",
                targetKey: "key",
                as: "roleData",
            });
        }
    }
    User.init(
        {
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            address: DataTypes.STRING,
            phoneNumber: DataTypes.STRING,
            gender: DataTypes.BOOLEAN,
            image: DataTypes.STRING,
            roleId: DataTypes.STRING,
            positionId: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "User",
        }
    );
    return User;
};
