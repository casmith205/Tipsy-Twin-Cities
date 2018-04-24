module.exports = function (sequelize, DataTypes) {
  var Restaurant = sequelize.define("Restaurant", {
    restaurant_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: { msg: "Restaurant name cannot be empty!" }
      }
    },
    description: {
      type: DataTypes.TEXT
    },
    phone_number: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10, 10],
          msg: "Phone number must be 10 digits."
        }
      }
    },
    restaurant_website: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    restaurant_address: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: { msg: "Address name cannot be empty!" }
      }
    }
  });

  Restaurant.associate = function (models) {
    Restaurant.hasMany(models.Deal, {
      onDelete: "cascade"
    }),
      Restaurant.hasMany(models.Comm, {
        onDelete: "cascade"
      });
  };
  return Restaurant
}
