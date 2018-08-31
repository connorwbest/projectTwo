module.exports = function(sequelize, DataTypes) {
  var FollowUp = sequelize.define("FollowUp", {
    open: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    action: {
      type: DataTypes.STRING,
      allowNull: false
    },
    memo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    duedate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
  return FollowUp;
};
