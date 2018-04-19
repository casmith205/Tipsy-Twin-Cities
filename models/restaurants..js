module.exports = function(sequelize, DataTypes) {
    var Restaurant = sequelize.define("Restaurant", {
      restaurant_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT
      },
      restaurant_website: {
        type: DataTypes.STRING
      }
    });

    Restaurant.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Restaurant.hasMany(models.Deals, {
      onDelete: "cascade"
    });
  };
    return Restaurant;
};
  