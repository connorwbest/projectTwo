module.exports = function(sequelize, DataTypes) {
    var CurFolUp = sequelize.define("followUp", {
      recentStatus: DataTypes.STRING,
      action: DataTypes.STRING,
      due: DataTypes.DATEONLY,
      memo: DataTypes.TEXT,
      custid: DataTypes.INTEGER
    });
    return CurFolUp;
  };
  