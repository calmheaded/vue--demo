/*
    pm2 配置文件
    author: svon.me@gmail.com
*/

module.exports = {
  apps: [
    {
      name: "mc",
      script: "./dist/bin/www.js", // 启动脚本
      watch: false, // 不监听文件变化
      env: {
        // 从 osec_core_front 继承
      }
    }
  ]
};
