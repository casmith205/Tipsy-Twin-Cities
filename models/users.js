module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      user_name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      first_name: {
        type: DataTypes.STRING
      },
      last_name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull:false,
        validate: {
          isEmail: true,
          notEmpty: true
        }
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });

    User.associate = function(models) {
      User.hasMany(models.Comm, {
        onDelete: "cascade"
    });
  };
    return User;
};
  