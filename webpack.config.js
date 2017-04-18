const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
// const autoprefixer = require('autoprefixer');

module.exports = {
    entry:
    {
        index: `${path.resolve(__dirname, 'src')}/index`,
        browser: `${path.resolve(__dirname, 'src')}/browser`,
        // formatting: `${path.resolve(__dirname, 'src')}/index`,
    },
    output:
    {
        path: path.resolve(__dirname, 'bin'),
        filename: './[name].min.js',
        // chunkFilename: './chunk.[id].min.js'
    },
    module:
    {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel',
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                query:
                {
                    presets: [['es2015', { modules: false }]],
                    // plugins: ['transform-decorators-legacy']
                }
            },
        ]
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    plugins: [
        // new webpack.DefinePlugin({ 'process.env.NODE_ENV': '\'production\'' }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            // minimize: false,
            debug: false,
            // options: {
            //     postcss: [autoprefixer]
            // }
        }),
        new webpack.optimize.UglifyJsPlugin({
          // compress: {
          //      warnings: false,
          //      keep_fnames: true
          // },
          // mangle: {
          //      keep_fnames: true
          // }
          // minimize: true,
            compress: true,
            beautify: false,
            // beautify: true,
            // mangle: {
            //     screw_ie8: true,
            //     keep_fnames: true
            // },
            // compress: {
            //     screw_ie8: true,
            //     warnings: false,
            // },
            // comments: false
        }),
    ],
};
