import Account from './AccClass.ts'
import { AddUser, getUsers } from '../Database/Database.ts'

interface IBank {
  id: string;
  accounts: Account[];
}

export default class Bank implements IBank {
  id: string;
  accounts: Account[];
  constructor(id: string) {
    this.id = id;
    this.accounts = getUsers().forEach(dbUser => {
      const user = new Account(dbUser.id, dbUser.isAdmin, dbUser.username, dbUser.email, dbUser.password)
    });
  } 
}
