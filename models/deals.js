module.exports = function(sequelize, DataTypes) {
    var Deal = sequelize.define("Deal", {
      deal_description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Deal description cannot be empty!" }
        }
      },
      day: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Day cannot be empty!" }
        }
      },
      start_time: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Start time cannot be empty!" }
        }
      },
      end_time: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: { msg: "End time cannot be empty!" }
        }
      },
      restrictions: {
        type: DataTypes.TEXT
      },
      deal_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validation: {
          args: [['Food', 'Drink', 'Both']],
          msg: "Must be Food, Drink, or Both"
        }
      },
      verified: {
        type:DataTypes.BOOLEAN,
        defaultValue: false
      },
      flagged: {
        type:DataTypes.BOOLEAN,
        defaultValue: false
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
  