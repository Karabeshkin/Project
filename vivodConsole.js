const path = require('path');
const readlineSync = require('readline-sync');
const { QAGenerator } = require('./questions');

class VivodTem {
  vivodTem() {
    const userName = readlineSync.question(`\nКакую тему вы выберите ? 

1.Чернуха 
2.Айти
3.Святое

`);
    const line = '_________________________________________________';
    const arrOfObj = QAGenerator(userName - 1);
    let counter = 0;

    for (let i = 0; i < arrOfObj.length; i += 1) {
      const getAnswer = readlineSync.question(`\n${arrOfObj[i].question}\n`);

      if (arrOfObj[i].answer.toLowerCase() === `${getAnswer.toLowerCase()}.`) {
        console.log(`\nМолодец, красавчик, умничка!\n${line}`);
        counter += 1;
      } else {
        console.log(`\nНичтожество.\nПравильный ответ: ${arrOfObj[i].answer}\n${line}`);
      }
    }
    console.log(`Ваш результат: ${counter}/${arrOfObj.length}`);
  }
}

const civodTem = new VivodTem();
civodTem.vivodTem();

const repeat = readlineSync.question('\nЗапустить заново?\nДа/Нет\n\n');

while (repeat === 'Да' || repeat === 'ДА' || repeat === 'да') {
  civodTem.vivodTem();
}

module.exports = VivodTem;
