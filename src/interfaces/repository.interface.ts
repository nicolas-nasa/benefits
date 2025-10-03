export type paginate = {
  limit: number;
  page: number;
};

interface RepositoryInterface<T> {
  create: (params: T) => Promise<T>;
  update: (id: string, params: T) => Promise<T>;
  list: (
    paginate: paginate
  ) => Promise<{ response: T[]; lastPage: number; actualPage: number }>;
  delete: (id: string) => Promise<void>;
}

export { RepositoryInterface };
