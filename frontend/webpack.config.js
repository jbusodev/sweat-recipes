const path = require("path");
const webpack = require("webpack");
const middleware = require("webpack-dev-middleware");

// webpack config
module.exports = {
    mode: "development",
    entry: ["babel-polyfill", path.resolve(__dirname, "./src/index.js")],
    output: {
        // where compiled files go
        path: path.resolve(__dirname, "./static/frontend/public/"),

        // 127.0.0.1/frontend/public/ where files are served from
        publicPath: "/static/frontend/public/",
        filename: "main.js",
    },
    module: {
        // configuration regarding modules
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: { presets: ["@babel/env", "@babel/preset-react"] },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: ["file-loader"],
            },
        ],
    },
};

const config = module.exports;
const compiler = webpack(config);

middleware(compiler, {
    writeToDisk: true,
});
