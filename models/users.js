module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      user_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      first_name: {
        type: DataTypes.STRING
      },
      last_name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      verified: {
        type: DataTypes.BOOLEAN
      }
    });

    User.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.Comment, {
      onDelete: "cascade"
    });
  };
    return User;
};
  