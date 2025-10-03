import {
  RepositoryInterface,
  paginate,
} from "@interfaces/repository.interface";
import { Benefit } from "models/benefit.model";

class BenefitService {
  repository: RepositoryInterface<Benefit>;
  constructor(repository: RepositoryInterface<Benefit>) {
    this.repository = repository;
  }

  async list(paginate: paginate) {
    return this.repository.list(paginate);
  }
  async activate(id: string) {
    return this.repository.update(id, { isActive: true });
  }
  async deactivate(id: string) {
    return this.repository.update(id, { isActive: false });
  }
  async create(params: any) {
    return this.repository.create(params);
  }
  async delete(id: string) {
    return this.repository.delete(id);
  }
}

export { BenefitService };
