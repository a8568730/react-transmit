var webpack = require("webpack");
var config = require("./webpack.client.js");

config.cache = true;
config.debug = false;
config.devtool = "cheap-eval-source-map";

config.entry.unshift(
	"webpack-dev-server/client?http://localhost:8080",
	"webpack/hot/only-dev-server"
);

config.output.publicPath = "http://localhost:8080/dist/";
config.output.hotUpdateMainFilename = "update/[hash]/update.json";
config.output.hotUpdateChunkFilename = "update/[hash]/[id].update.js";

config.plugins = [
	new webpack.HotModuleReplacementPlugin()
];

config.module.postLoaders = [
	{test: /\.js$/, loaders: ["react-hot"], exclude: /node_modules/}
];

config.devServer = {
	publicPath:  "http://localhost:8080/dist/",
	contentBase: "./static",
	hot:         true,
	inline:      true,
	lazy:        false,
	quiet:       true,
	noInfo:      false,
	headers:     {"Access-Control-Allow-Origin": "*"},
	stats:       {colors: true}
};

module.exports = config;
