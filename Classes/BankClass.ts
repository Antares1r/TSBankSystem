import Account from './AccClass.ts'
import { AddUser, getUsers, modifyValue } from '../Database/Database.ts'

interface IBank {
  id: string;
  accounts: Account[];
}

export default class Bank implements IBank {
  id: string;
  accounts: Account[];

  constructor(id: string) {
    this.id = id;
    // Use map to create the accounts array
    this.accounts = getUsers().map(dbUser => {
      return new Account(dbUser.id, dbUser.isAdmin, dbUser.username, dbUser.email, dbUser.password, dbUser.money);
    });
  }

  transaction(user: string, money: number, target: string): void {
    modifyValue("money", money, user);
    console.log(`Adding Money from ${user} to ${target} with amount ${money}`);
    modifyValue("money", money, target);  // Fixed to modify the target's account
    console.log("Added Money");
  }
}
