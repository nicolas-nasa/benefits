interface RepositoryInterface<T> {
  findAll: (parms: T) => Promise<T[]>;
  findOne: (parms: T) => Promise<T>;
  create: (parms: T) => Promise<T>;
  update: (parms: T) => Promise<T>;
  delete: (parms: T) => Promise<void>;
}

export { RepositoryInterface };
