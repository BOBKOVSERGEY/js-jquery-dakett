var bs = require("browser-sync").create();

//тут
bs.watch(['while/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./while"
});