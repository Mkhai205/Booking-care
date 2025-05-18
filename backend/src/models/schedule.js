"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Schedule extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */ static associate(models) {
            // define association here
            Schedule.belongsTo(models.User, {
                foreignKey: "doctorId",
                targetKey: "id",
                as: "doctorData",
            });
            Schedule.belongsTo(models.Allcode, {
                foreignKey: "timeType",
                targetKey: "key",
                as: "timeTypeData",
            });
        }
    }
    Schedule.init(
        {
            currentNumber: DataTypes.INTEGER,
            maxNumber: DataTypes.INTEGER,
            data: DataTypes.DATE,
            timeType: DataTypes.STRING,
            doctorId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Schedule",
        }
    );
    return Schedule;
};
