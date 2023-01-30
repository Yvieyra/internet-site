const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  { // defined columns in relation to seed-data
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true, 
      autoIncrement: true
    },
    product_id: {
      type: DataType.INTEGER,
      reference: {
        model: 'product',
        key: 'id',
        unique:false
      }
    },
    tag_id: {
      type: DataType.INTEGER,
      reference: {
        model: 'tag',
        key: 'id',
        unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
