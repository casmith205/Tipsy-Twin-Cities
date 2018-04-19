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
        type: DataTypes.INTEGER,
        allowNull: false
      },
      end_time: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      restrictions: {
        type: DataTypes.TEXT
      },
      deal_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validation: {
          args: [['food', 'drink']],
          msg: "Must be Food or Drink"
        }
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
  