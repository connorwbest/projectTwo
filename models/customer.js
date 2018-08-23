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
      allowNull:false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [10]
      }
    },
    lead_status: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });
  return Customer;
};
