var bs = require("browser-sync").create();

//тут
bs.watch(['date/exzample/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  proxy: "js-jquery-dakett/date/exzample"
});