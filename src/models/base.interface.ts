
export interface IBaseOptions {
  id: string;
  createdAt?: number | Date;
  updatedAt?: number | Date;
}

export interface ISortable {
  [key: string]: 'ASC' | 'DESC'
}

export interface IBasePagination {
  page: number;
  limit: number;
}
