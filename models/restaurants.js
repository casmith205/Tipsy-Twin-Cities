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
        type: DataTypes.STRING,
        validate: {
          isUrl: true
        }
      },
      restaurant_address: {
        type: DataTypes.STRING
      }
    });

    Restaurant.associate = function(models) {
      Restaurant.hasMany(models.Deal, {
        onDelete: "cascade"
    });

    Restaurant.associate = function(models) {
      Restaurant.hasMany(models.Comment, {
        onDelete: "cascade"
    });
  };
    return Restaurant;
};
};