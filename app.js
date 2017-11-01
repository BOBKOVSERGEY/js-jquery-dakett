var bs = require("browser-sync").create();

//тут
bs.watch(['nodeValue/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./nodeValue"
});