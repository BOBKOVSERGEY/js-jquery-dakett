var bs = require("browser-sync").create();

//тут
bs.watch(['getElementsByTagName/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./getElementsByTagName"
});