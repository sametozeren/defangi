const chalk = require('chalk');

class ConsoleResult {
    error(message) {
        console.log(chalk.whiteBright.bgHex('#c0392b').bold(' ' + message + ' '));
    }
    success(message) {
        console.log(chalk.whiteBright.bgHex('#27ae60').bold(' ' + message + ' '));
    }
}

module.exports = new ConsoleResult();