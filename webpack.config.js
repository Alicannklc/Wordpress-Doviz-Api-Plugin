var Encore = require("@symfony/webpack-encore");

Encore.setOutputPath("public/build/")
  .setPublicPath("/build")
  .addEntry("js/app", ["babel-polyfill", "./assets/js/app.js"])
  .cleanupOutputBeforeBuild()
  .enableBuildNotifications()
  .enableSourceMaps(!Encore.isProduction())
  .enableSourceMaps(!Encore.isProduction())
  .enableSourceMaps(true)
  .configureBabel(function(babelConfig) {
    babelConfig.presets.push("env");
  })
  .enableReactPreset();

module.exports = Encore.getWebpackConfig();
