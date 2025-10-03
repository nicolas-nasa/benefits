import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

sequelize.sync({ force: false });

export { sequelize, DataTypes, Model };
