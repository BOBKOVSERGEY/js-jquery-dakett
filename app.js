var bs = require("browser-sync").create();

//тут
bs.watch(['sobytiya/blurOld/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./sobytiya/blurOld"
});