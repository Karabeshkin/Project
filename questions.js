const fs = require('fs');
const path = require('path');
const VivodTem = require('./vivodConsole')

class Generator {
    static findTheme(number) {
        const themes = fs.readdirSync(path.join(__dirname, 'topics'));
        return fs.readFileSync(path.join(__dirname, `topics/${themes[number]}`), 'utf-8');
    }

    static getQuestions(str) {
        const reg = /[(а-я0-9)|,|\. ]+\?/gim;
        return str.match(reg);
    }

    static getAnswers(str) {
        const reg = /[(а-я0-9)|,| ]+(\.|!)/gim
        return str.match(reg);
    }

}

// const question = Generator.getQuestions(Generator.findTheme(1));
// const answer = Generator.getAnswers(Generator.findTheme(1))


class questionAnswers {
    constructor (question, answer) {
        this.question = question;
        this.answer = answer;
    }
}


function QAGenerator(number) {
  const arr = [];
  const question = Generator.getQuestions(Generator.findTheme(number));
  const answer = Generator.getAnswers(Generator.findTheme(number))

for (let i = 0; i < question.length; i += 1) {
  const QA = new questionAnswers(question[i], answer[i]);
  arr.push(QA);
 }
 return arr;
}



module.exports = {
    Generator,
    questionAnswers,
    QAGenerator,
}
