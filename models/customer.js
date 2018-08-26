module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });
  Customer.associate = function(models) {
    Customer.hasMany(models.Followup, {
      onDelete: "cascade"
    });
  };

  return Customer;
};
