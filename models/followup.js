module.exports = function(sequelize, DataTypes) {
  var FollowUp = sequelize.define("FollowUp", {
    open: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    action: {
      type: DataTypes.STRING,
      allowNull: true
    },
    memo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    duedate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  });
  return FollowUp;
};
