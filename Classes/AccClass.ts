import { AddUser, getUsers } from '../Database/Database.ts'

export enum Permissions {
  ADMIN,
  READ,
  WRITE
}

export interface IAccount {
  id: string;
  isAdmin?: boolean;
  username: string;
  email: string;
  password: string;
}

export class Account implements IAccount {
  id: string;
  isAdmin?: boolean;
  username: string;
  email: string;
  password: string; 

  constructor(id: string, isAdmin?: boolean, username: string, email: string, password: string) {
    this.id = id;
    this.isAdmin = isAdmin;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
