module.exports = function(sequelize, DataTypes) {
  var beers = sequelize.define("ratings", {
    userRating: DataTypes.INTEGER
  });
  return beers;
};
