import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

export { sequelize, DataTypes, Model };
