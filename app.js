var bs = require("browser-sync").create();

//тут
bs.watch(['practiceEvent/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./practiceEvent"
});