import path from 'path';
import entrypoints from './entrypoints.babel.js';

const config = {
    entry: entrypoints,
    output: {
        path: path.resolve(__dirname, '../public/resources/'),
        publicPath: 'resources/',
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: path.resolve(__dirname, '../node_modules'),
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(png|svg|jpg)/,
                use: {
                    loader: "file-loader",
                },
            },
        ],
    },
    plugins: [],
    resolve: {
        modules: [
            path.resolve(__dirname, '../node_modules'),
            path.resolve(__dirname, '../resources'),
        ],
        extensions: [
            '.js',
            '.jsx',
            '.json',
        ],
    },
};

export default config;
