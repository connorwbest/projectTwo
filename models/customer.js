module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    interested: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    }
  });
  Customer.associate = function(models) {
    Customer.hasMany(models.FollowUp, {
      onDelete: "restrict"
    });
  };

  return Customer;
};
