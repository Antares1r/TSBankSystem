
import { Bank } from "../BankClass.ts";

export enum menuOptions {
  TRANSACTION = 'Transaction',
  CSUBSCRIPTIONS = 'Current Subscriptions',
  SETTINGS = 'Settings',
  QUIT = 'Quit'
}

export default class Menu {
  menuIndex: number;
  menuEntrys: string[];
  menuTitle: string;

  constructor(title: string, entries: string[]) {
    this.menuTitle = title;
    this.menuEntrys = entries;
    this.menuIndex = 0;
  }

  async registerInput(): Promise<void> {
    console.clear();
    this.menu();
    Deno.stdin.setRaw(true);

    const decoder = new TextDecoder();

    while (true) {
      const buf = new Uint8Array(8);
      const n = await Deno.stdin.read(buf);
      if (!n) continue;

      const key = decoder.decode(buf.slice(0, n));

      if (key === "\x1b[A") this.menuIndex = Math.max(0, this.menuIndex - 1); // Up
      else if (key === "\x1b[B") this.menuIndex = Math.min(this.menuEntrys.length - 1, this.menuIndex + 1); // Down
      else if (key === "\r") {this.execute(this.menuIndex); break;} // Enter
      else if (key === "q") break; // Quit

      console.clear();
      this.menu();
    }

    Deno.stdin.setRaw(false); // Reset terminal mode
  }

  execute(action: menuOptions): void {
    switch (action) {
      case menuOptions.QUIT:
        
    }
  }

  menu(): void {
    console.log(`\x1b[31m${this.menuTitle}\x1b[0m`);

    for (let i = 0; i < this.menuEntrys.length; i++) {
      if (i === this.menuIndex) {
        console.log(`\x1b[41m\x1b[30m ${i + 1}. ${this.menuEntrys[i]} \x1b[0m`); // Highlight selection
      } else {
        console.log(` ${i + 1}. ${this.menuEntrys[i]}`);
      }
    }
  }
}

