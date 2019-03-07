module.exports = function(sequelize, DataTypes) {
  var Ingredient = sequelize.define("Ingredient", {
    save: {
    text: DataTypes.TEXT,
    allowNull: false,
    validate: {
      len: [1]
    }
    }
  });

  return Ingredient;
};
