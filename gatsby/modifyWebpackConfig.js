const webpackLodashPlugin = require("lodash-webpack-plugin");

module.exports = ({ config, stage }) => {
  if (stage === "build-javascript") {
    config.plugin("Lodash", webpackLodashPlugin, null);
  }
};
