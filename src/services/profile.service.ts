import { IBaseService } from "./base.service";
import { Profile, IPaginable, ISortable, IProfileOptions } from "models";
import { StorageKeys } from "enums";
import { FireStore } from "fire.utils";

export class ProfileService implements IBaseService<IProfileOptions> {

  find(where?: Readonly<IProfileOptions>, pagination?: IPaginable, sort?: ISortable | ISortable[]): Promise<IProfileOptions[]> {
    let query = FireStore.collection('profiles').limit(pagination ? pagination.limit : 10);

    if (pagination && pagination.startKey) {
      query = query.startAt(pagination.startKey);
    }

    if (sort) {
      for (const key of Object.keys(sort)) {
        query = query.orderBy(key, sort[key]);
      }
    }
    if (where) {
      for (const key of Object.keys(where)) {
        query = query.where(key, '==', where[key]);
      }
    }
    return query.get().then(({ docs }) => docs.map(doc => ({ id: doc.id, ...doc.data() })))
  }

  findOne(where: Readonly<IProfileOptions>): Promise<IProfileOptions> {
    throw new Error("Method not implemented.");
  }

  create(item: IProfileOptions): Promise<IProfileOptions> {
    throw new Error("Method not implemented.");
  }

  update(id: string, item: IProfileOptions): Promise<IProfileOptions> {
    throw new Error("Method not implemented.");
  }

  destroy(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  get activeProfile(): IProfileOptions {
    const profile = window.localStorage.getItem(StorageKeys.Profile);
    return JSON.parse(profile);
  }

  set activeProfile(profile: IProfileOptions) {
    const prof = JSON.stringify(profile);
    window.localStorage.setItem(StorageKeys.Profile, prof);
  }
}