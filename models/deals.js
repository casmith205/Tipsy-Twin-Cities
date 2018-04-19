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
        type: DataTypes.TEXT
      },
      deal_type: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    Deal.associate = function(models) {
      // A Deal can't be created without a Restaurant due to the foreign key constraint
      Deal.belongsTo(models.Restaurant, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Deal;
  };
  