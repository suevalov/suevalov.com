const modifyWebpackConfig = require("./gatsby/modifyWebpackConfig");
const onCreateNode = require("./gatsby/onCreateNode");
const createPages = require("./gatsby/createPages");

exports.modifyWebpackConfig = modifyWebpackConfig;
exports.onCreateNode = onCreateNode;
exports.createPages = createPages;
