const { error } = require("console");
const fs = require("fs");
const path = require("path");
var readlineSync = require("readline-sync");

class VivodTem {
  // constructor() {}

  vivodTem() {
    const userName = readlineSync.question(`\nКакую тему вы выберите ? 

1.тема 
2.тема
3.тема

`);
    if (userName == 1) {

      console.log(`\nИван`);
    }
    if (userName == 2) {
      console.log(`\nСтас`);
    }
    if (userName == 3) {
      console.log(`\nМакс`);
    }
  }

  vivodVoprosov() {}
  // ojidanieOtveta() {}
}
const civodTem = new VivodTem();
civodTem.vivodTem();
