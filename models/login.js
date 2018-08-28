module.exports = function(sequelize, DataTypes) {
    var Login = sequelize.define("Login", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8]
        }
      },
    });
    return Login;
  };