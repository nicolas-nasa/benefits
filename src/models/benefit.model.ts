import { sequelize, DataTypes, Model } from "@providers/sequilize.provider";

class Benefit extends Model {}

Benefit.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    names: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      autoIncrement: true,
    },
    softdelete: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    modelName: "Benefit",
    tableName: "Benefit",
  }
);

export { Benefit };
