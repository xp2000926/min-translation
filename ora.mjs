import ora, { oraPromise } from 'ora';
const spinner = ora('Loading').start();

async function fn() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  await oraPromise(promise, {
    text: '正在下载',
    successText: '下载成功',
    failText: '下载失败',
  });
}
fn();
