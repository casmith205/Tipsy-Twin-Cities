module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "User name cannot be empty!" }
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
      allowNull: false,
      validate: {
        isEmail: { msg: "Must provide a valid email address." },
        notEmpty: { msg: "Email cannot be empty!" }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Password cannot be empty!" }
      }
    },
    verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  User.associate = function (models) {
    User.hasMany(models.Comm, {
      onDelete: "cascade"
    });
  };
  return User;
};
