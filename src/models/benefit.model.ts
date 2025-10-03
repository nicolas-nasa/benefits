import { sequelize, DataTypes, Model } from "@providers/sequilize.provider";

class Benefit extends Model {}

Benefit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    names: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
      unique: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      unique: false,
    },
    softdelete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "Benefit",
    tableName: "Benefit",
  }
);

export { Benefit };
