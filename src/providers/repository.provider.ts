import {
  paginate,
  RepositoryInterface,
} from "@interfaces/repository.interface";
import { Model, ModelStatic } from "sequelize";

class SequelizeRepositoryProvider
  implements RepositoryInterface<Model<any, any>>
{
  private model: ModelStatic<Model>;

  constructor(model: ModelStatic<Model>) {
    this.model = model;
  }

  async create(params: any) {
    return (await this.model.create(params)).dataValues;
  }
  async update(id: string, params: any) {
    await this.model.update(
      { params },
      {
        where: {
          id,
        },
      }
    );

    return (await this.model.findByPk(id)).dataValues;
  }

  async list(paginate: paginate) {
    const offset = paginate.limit * (paginate.page - 1 || 0);
    const result = (
      await this.model.findAll({
        where: { softdelete: false },
        limit: paginate.limit,
        offset,
      })
    ).map((value) => value.dataValues);

    console.log(result);
    const count = await this.model.count();
    console.log(count);
    const lastPage = Math.ceil(count / paginate.limit);
    return {
      response: result,
      lastPage,
      actualPage: (paginate.page || 0) + 1,
    };
  }

  async delete(id: string) {
    this.model.update({ softdelete: true }, { where: { id } });
  }
}

export { SequelizeRepositoryProvider };
