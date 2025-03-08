// @ts-ignore
import Menu from './Classes/Menu/Menu.ts';
// @ts-ignore
import Bank from './Classes/BankClass.ts';
import Account from './Classes/AccClass.ts';
// @ts-ignore
import { closeDB } from './Database/Database.ts'
// @ts-ignore
import { menuOptions } from './Classes/Menu/Menu.ts'

const bank = new Bank("ee134");

// @ts-ignore
await closeDB();

const menu = new Menu("Bank", [menuOptions.TRANSACTION, menuOptions.CSUBSCRIPTIONS, menuOptions.SETTINGS, menuOptions.QUIT]);

menu.registerInput();

