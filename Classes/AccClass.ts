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

export default class Account implements IAccount {
  id: string;
  isAdmin?: boolean;
  username: string;
  email: string;
  password: string;
  money: number;

  constructor(id: string, isAdmin?: boolean, username: string, email: string, password: string, money: number) {
    this.id = id;
    this.isAdmin = isAdmin;
    this.username = username;
    this.email = email;
    this.password = password;
    this.money = money;
  }
}
