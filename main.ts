import Menu from './Classes/Menu/Menu.ts';
import Bank from './Classes/BankClass.ts';
import Account from './Classes/AccClass.ts';
import { closeDB } from './Database/Database.ts'
import { menuOptions } from './Classes/Menu/Menu.ts'

const bank = new Bank("ee134");

await closeDB();

const menu = new Menu("Bank", [menuOptions.TRANSACTION, menuOptions.CSUBSCRIPTIONS, menuOptions.SETTINGS, menuOptions.QUIT]);

menu.registerInput();

