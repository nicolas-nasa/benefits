import { RepositoryInterface } from "@interfaces/index.interfaces";
import { Sequelize } from "sequelize";

class SequilizeDataProvider<T> implements RepositoryInterface<T> {
  private dbconnection: Sequelize;
  constructor() {
    this.dbconnection = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
    });
    this.dbconnection.authenticate();
    this.dbconnection.sync({force: false});
  }
  findAll(parms: T): Promise<T[]> {
    return Promise.resolve([parms]);
  }
  findOne(parms: T): Promise<T> {
    return Promise.resolve(parms);
  }
  create(parms: T): Promise<T> {
    return Promise.resolve(parms);
  }
  update(parms: T): Promise<T> {
    return Promise.resolve(parms);
  }
  delete(parms: T): Promise<void> {
    return;
  }

  connect() {}

  disconnect() {}
}

export { SequilizeDataProvider };
