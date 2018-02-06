var bs = require("browser-sync").create();

//тут
bs.watch(['evenent-izmeneniya-dom/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./evenent-izmeneniya-dom"
});