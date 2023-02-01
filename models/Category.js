const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model { }

Category.init(
  {  // defined columns in relation to seeds-data
    id: { //will not see, cannot be null error. 
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncremenent: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
