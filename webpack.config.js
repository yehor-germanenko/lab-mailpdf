const path = require("path");
const APP_SOURCE = path.join(__dirname, "src");

module.exports = {
    target: "node",
    mode: "production",
    entry: path.join(APP_SOURCE, "index.js"),
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].js",
        libraryTarget: "umd",
        globalObject: "this"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: APP_SOURCE,
                use: 'babel-loader'
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            }
        ],
    },
};
