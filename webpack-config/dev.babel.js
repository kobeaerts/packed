import path from 'path';

import StylelintPlugin from 'stylelint-webpack-plugin';
import Autoprefixer from 'autoprefixer';

import common from './common.babel.js';

const config = {
    ...common,
    mode: 'development',
    module: {
        ...common.module,
        rules: [
            ...common.module.rules,
            {
                enforce: "pre",
                test: /\.jsx?$/,
                exclude: path.resolve(__dirname, '../node_modules'),
                loader: "eslint-loader",
                options: {
                    fix: true,
                },
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: () => ([
                                new Autoprefixer(),
                            ]),
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            includePaths: [
                                path.resolve(__dirname, '../resources')
                            ],
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new StylelintPlugin({
            emitErrors: false,
            syntax: 'scss',
            fix: true,
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, '../public'),
    },
    devtool: 'eval-source-map',
};

export default config;
