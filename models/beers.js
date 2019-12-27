module.exports = function(sequelize, DataTypes) {
  var beers = sequelize.define("beers", {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    location: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    likes: DataTypes.INTEGER,
    dislikes: DataTypes.INTEGER
  });

  beers.associate = function(models) {
    beers.hasMany(models.ratings);
  };
  return beers;
};
