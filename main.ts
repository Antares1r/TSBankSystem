import Menu from './Classes/Menu/Menu.ts';
import Bank from './Classes/BankClass.ts';
import Account from './Classes/AccClass.ts';
import { closeDB } from './Database/Database.ts'

const bank = new Bank("ee134");

console.log(bank.accounts)

closeDB()

const menu = new Menu("Bank", ['test1', 'test2', 'test3', 'test4']);

menu.registerInput();
