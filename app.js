var bs = require("browser-sync").create();

//тут
bs.watch(['global-object/*.*', 'css/*.css']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  proxy: "js-jquery-dakett/global-object"
});