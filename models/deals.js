module.exports = function(sequelize, DataTypes) {
    var Deal = sequelize.define("Deal", {
      deal_description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      day: {
        type: DataTypes.STRING,
        allowNull: false
      },
      start_time: {
        type: DataTypes.STRING,
        allowNull: false
      },
      end_Time: {
        type: DataTypes.STRING,
        allowNull: false
      },
      restrictions: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      deal_type: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    Deal.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Deal.belongsTo(models.Restaurant, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Deal;
  };
  