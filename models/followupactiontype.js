module.exports = function(sequelize, DataTypes) {
  var FollowupActionType = sequelize.define("FollowupActionType", {
    action: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  FollowupActionType.removeAttribute("id");
  return FollowupActionType;
};
