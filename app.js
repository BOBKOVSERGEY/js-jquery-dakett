var bs = require("browser-sync").create();

//тут
bs.watch(['focus-blur/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./focus-blur"
});