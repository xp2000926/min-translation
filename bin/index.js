#!/usr/bin/env node

const process = require('process');
const commander = require('commander');
const pkg = require('../package.json');

const program = new commander.Command();

program
  .name(pkg.name)
  .usage('<command> [options]')
  .version(pkg.version)
  .option('-d, --debug', '是否开启调试模式', false)
  .option('-e, --env <envName>', '获取环境变量');

//注册一个init命令
const init = program.command('init <name> [description]');
init
  .description('初始化项目')
  .option('-f, --force', '是否强制初始化')
  .action((name, description, cmd) => {
    console.log(name, description, cmd);
  });

// 注册子命令
const serve = new commander.Command('serve');
serve.command('start [port]').action((port) => {
  console.log('serve start', port);
});
serve.command('stop').action(() => {
  console.log('serve stop');
});
// 子命令添加到父命令
program.addCommand(serve)
program.parse(process.argv);
