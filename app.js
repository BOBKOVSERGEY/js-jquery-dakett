var bs = require("browser-sync").create();

//тут
bs.watch(['click/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./click"
});