export default class BaseEntity {
  id?: string;
  createdAt?: Date;

  toPlainObject(): Partial<this> {
    const plainObject: Partial<this> = {};

    for (const key of Reflect.ownKeys(this)) {
      if (typeof this[key as keyof this] !== "function") {
        plainObject[key as keyof this] = this[key as keyof this];
      }
    }

    return plainObject;
  }
}

