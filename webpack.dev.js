const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/index.ts',
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i, // https://github.com/webpack-contrib/sass-loader
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ],
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
    },
};