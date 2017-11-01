var bs = require("browser-sync").create();

//тут
bs.watch(['createElement/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./createElement"
});