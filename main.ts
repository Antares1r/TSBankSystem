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

console.log(bank.accounts[0].money);
bank.transaction(bank.accounts[0].username, 50, bank.accounts[1].username)
console.log(bank.accounts[0].money);

// @ts-ignore
await closeDB();



//const mainMenu = new Menu("Bank", [menuOptions.TRANSACTION, menuOptions.CSUBSCRIPTIONS, menuOptions.SETTINGS, menuOptions.QUIT], bank);

//mainMenu.registerInput();

