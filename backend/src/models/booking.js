"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */ static associate(models) {
            // define association here
            Booking.belongsTo(models.User, {
                foreignKey: "patientId",
                targetKey: "id",
                as: "patientData",
            });
            Booking.belongsTo(models.User, {
                foreignKey: "doctorId",
                targetKey: "id",
                as: "doctorData",
            });
            Booking.belongsTo(models.Allcode, {
                foreignKey: "timeType",
                targetKey: "key",
                as: "timeTypeData",
            });
            Booking.belongsTo(models.Allcode, {
                foreignKey: "statusId",
                targetKey: "key",
                as: "statusData",
            });
        }
    }
    Booking.init(
        {
            statusId: DataTypes.STRING,
            doctorId: DataTypes.INTEGER,
            patientId: DataTypes.INTEGER,
            data: DataTypes.DATE,
            timeType: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Booking",
        }
    );
    return Booking;
};
