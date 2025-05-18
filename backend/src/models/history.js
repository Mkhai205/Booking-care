"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class History extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */ static associate(models) {
            // define association here
            History.belongsTo(models.User, {
                foreignKey: "patientId",
                targetKey: "id",
                as: "patientData",
            });
            History.belongsTo(models.User, {
                foreignKey: "doctorId",
                targetKey: "id",
                as: "doctorData",
            });
        }
    }
    History.init(
        {
            patientId: DataTypes.INTEGER,
            doctorId: DataTypes.INTEGER,
            description: DataTypes.TEXT,
            files: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: "History",
        }
    );
    return History;
};
