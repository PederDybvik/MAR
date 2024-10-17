import BaseEntity from "./base-entity";

export default class GuestBookMessage extends BaseEntity {
  name?: string;
  message?: string;

  constructor(name?: string, message?: string) {
    super();
    this.name = name;
    this.message = message;
  }
}

