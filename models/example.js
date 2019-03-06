module.exports = function(sequelize, DataTypes) {
  var Ingredient = sequelize.define("Ingredient", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Ingredient;
};
