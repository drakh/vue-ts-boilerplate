import * as path from "path";
import * as webpack from "webpack";
import * as VueLoaderPlugin from "vue-loader";
import * as HtmlWebpackPlugin from "html-webpack-plugin";

const outDir = path.join(__dirname, "../dist");
const entry = path.join(__dirname, "app/index.ts");
const template = path.join(__dirname, "html/index.html");
const publicPath = "dist/";

const config: webpack.Configuration = {
    entry: {app: entry},
    cache: true,
    parallelism: 5,
    output: {
        path: outDir,
        publicPath: `/${publicPath}`,
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {
                        scss: "vue-style-loader!css-loader!sass-loader",
                        sass: "vue-style-loader!css-loader!sass-loader?indentedSyntax",
                    },
                },
            },
            {
                test: [/\.ts?$/, /\.tsx?$/],
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]?[hash]",
                },
            },
            {
                test: /\.css$/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {minimize: true},
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js", ".vue", ".json"],
        alias: {
            vue$: "vue/dist/vue.esm.js",
        },
    },
    devServer: {
        openPage: publicPath,
        lazy: false,
        filename: "[name].js",
        port: 1337,
        contentBase: outDir,
        compress: false,
        historyApiFallback: true,
        noInfo: false,
        hot: true,
    },
    devtool: "source-map",
    mode: "development",
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin.VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template,
        }),
    ],
};
module.exports = config;
