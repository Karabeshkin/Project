const { error } = require("console");
const fs = require("fs");
const path = require("path");
var readlineSync = require("readline-sync");
const {Generator, questionAnswers, QAGenerator} = require('./questions');

class VivodTem {
  // constructor() {}

  vivodTem() {
    const userName = readlineSync.question(`\nКакую тему вы выберите ? 

1.тема 
2.тема
3.тема

`);
    console.log(QAGenerator(userName));
  }

  vivodVoprosov() {}
  // ojidanieOtveta() {}
}
const civodTem = new VivodTem();
civodTem.vivodTem();

module.exports = VivodTem;
