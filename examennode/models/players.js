'use strict'
module.exports = (sequelize, DataTypes) => {
  const Players = sequelize.define('Players', {
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    fisrtLastName: DataTypes.STRING,
    secondLastName: DataTypes.STRING,
    ranking: DataTypes.INTEGER,
    birthdday: DataTypes.DATE,
    weight: DataTypes.INTEGER,
    height: DataTypes.INTEGER
  }, {})
  Players.associate = function (models) {
    // associations can be defined here
  }
  return Players
}
