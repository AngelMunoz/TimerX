
export interface IBaseOptions {
  id?: string;
  createdAt?: number | Date;
  updatedAt?: number | Date;
}

export interface ISortable {
  [key: string]: 'ASC' | 'DESC'
}

export interface IPaginable {
  startKey: firebase.firestore.DocumentSnapshot;
  limit: number;
}
