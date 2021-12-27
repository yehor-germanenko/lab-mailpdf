const path = require("path");
const APP_SOURCE = path.join(__dirname, "src");

module.exports = {
    target: "node",
    mode: "development",
    entry: path.join(APP_SOURCE, "index.js"),
    resolve: {
        extensions: ['', '.js', '.jsx', '.ts', '.tsx']
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].js",
        libraryTarget: "umd",
        globalObject: "this"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                include: APP_SOURCE,
                use: 'babel-loader'
            },
            {
                test: /\.(png|jpg|gif|ttf)$/i,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
        ],
    },
};
