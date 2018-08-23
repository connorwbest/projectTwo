module.exports = function(sequelize, DataTypes) {
    var FollowUp = sequelize.define("Follow_ups", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      business_name: {
        type: DataTypes.STRING,
        allowNull: false
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
  