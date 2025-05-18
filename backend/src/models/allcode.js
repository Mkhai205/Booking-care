"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Allcode extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Allcode.hasMany(models.User, {
                foreignKey: "positionId",
                targetKey: "key",
                as: "positionData",
            });
            Allcode.hasMany(models.User, {
                foreignKey: "gender",
                targetKey: "key",
                as: "genderData",
            });
            Allcode.hasMany(models.User, {
                foreignKey: "roleId",
                targetKey: "key",
                as: "roleData",
            });

            Allcode.hasMany(models.Schedule, {
                foreignKey: "timeType",
                targetKey: "key",
                as: "timeTypeData",
            });
            Allcode.hasMany(models.Booking, {
                foreignKey: "timeType",
                targetKey: "key",
                as: "timeTypeBooking",
            });
            Allcode.hasMany(models.Booking, {
                foreignKey: "statusId",
                targetKey: "key",
                as: "statusData",
            });
        }
    }
    Allcode.init(
        {
            key: DataTypes.STRING,
            type: DataTypes.STRING,
            value_en: DataTypes.STRING,
            value_vi: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Allcode",
        }
    );
    return Allcode;
};
