module.exports = function(sequelize, DataTypes) {
    var FollowUp = sequelize.define("Follow_ups", {
      phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [10],
          isNumeric: true
        }
      },
     follow_status: {
         type: DataTypes.STRING,
         allowNull: false,
         defaultValue: 'interested'
     },
     action: {
         type: DataTypes.STRING,
         allowNull: false,
         defaultValue: 'call back'
     }
    });
    return FollowUp;
  };
  