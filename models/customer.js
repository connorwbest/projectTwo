module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    business_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    business_address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lead_status: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });
  return Customer;
};
