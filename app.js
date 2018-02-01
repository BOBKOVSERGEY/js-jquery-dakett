var bs = require("browser-sync").create();

//тут
bs.watch(['position/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./position"
});