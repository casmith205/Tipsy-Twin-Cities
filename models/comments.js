module.exports = function(sequelize, DataTypes) {
    var Comm = sequelize.define("Comm", {
      comment_text: {
        type: DataTypes.STRING,
        allowNull: false
      },
      rating: {
        type: DataTypes.STRING,
      }
    });
  
    Comm.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Comm.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    Comm.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Comm.belongsTo(models.Restaurant, {
          foreignKey: {
            allowNull: false
          }
        });
      };
  
    return Deal;
  };
  