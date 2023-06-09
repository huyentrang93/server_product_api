const { Sequelize, DataTypes, Model } = require('sequelize');
import sequelize from "../source";
  class User extends Model {}

  User.init({
    // Model attributes are defined here
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    roleid: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize, 
    modelName: 'users' 
  });
  class MainProducts extends Model {}

  MainProducts.init({
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    userId: {
      type: DataTypes.STRING
    },
    imei: {
      type: DataTypes.STRING
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize, 
    modelName: 'mainproducts' 
  });
  
class DeviceType extends Model {}

DeviceType.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize, 
  modelName: 'devicetype' 
});


class Devices extends Model {}

Devices.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  note: {
    type: DataTypes.STRING,
    allowNull: true
  },
  origin: {
    type: DataTypes.STRING,
    allowNull: true
  },
  idProduct: {
    type: DataTypes.UUID
  },
  idType: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize, 
  modelName: 'devices' 
});

class Remotes extends Model {}

Remotes.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING
  },
  code: {
    type: DataTypes.STRING
  },
  idDevice: {
    type: DataTypes.UUID
  },
  date: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  sequelize, 
  modelName: 'remotes' 
});

// User.hasMany(MainProducts, {
//   foreignKey: 'userId'
// });

User.hasMany(MainProducts, {
  foreignKey: 'userId'
});
// MainProducts.belongsTo(User, {
//   foreignKey: 'userId'
// });
MainProducts.hasMany(Devices, {
  foreignKey: 'idProduct'
});
// Devices.belongsTo(MainProducts, {
//   foreignKey: 'idProduct'
// });
Devices.hasMany(Remotes, {
  foreignKey: 'idDevice'
});
// Remotes.belongsTo(Devices, {
//   foreignKey: 'idDevice'
// });
// MainProducts.hasMany(Devices);
// Devices.belongsTo(MainProducts);
// Devices.hasMany(Remotes);
// Remotes.belongsTo(Devices);


// const inittable= async() => {
//     await sequelize.sync({ force: true });
// }
module.exports = {
  User,
  DeviceType,
  MainProducts,
  Devices,
  Remotes
};