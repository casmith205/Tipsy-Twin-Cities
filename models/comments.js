module.exports = function (sequelize, DataTypes) {
  var Comm = sequelize.define("Comm", {
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.STRING,
    }
  });

  Comm.associate = function (models) {
    Comm.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    }),
      Comm.belongsTo(models.Restaurant, {
        foreignKey: {
          allowNull: false
        }
      });
  };

  return Comm;
};
