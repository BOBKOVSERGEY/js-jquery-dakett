var bs = require("browser-sync").create();

//тут
bs.watch(['delegirovanie-sobytiy/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./delegirovanie-sobytiy"
});