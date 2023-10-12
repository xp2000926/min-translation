import chalk from 'chalk'
// 输出红色字体
console.log(chalk.red('hello world'))
console.log(chalk.bgRed('hello world'))
console.log(chalk.bold('hello world'))
console.log(chalk.white.bgRed.bold('hello world'))
console.log(chalk.white.bgRed.bold('hello', 'world', '!!!'))
console.log(chalk.bgBlue('hello', chalk.bold('world'), '!!!'))
console.log(chalk.rgb(123, 45, 67).underline('hello world'))
console.log(chalk.hex('#DEADED').bold('hello world'))