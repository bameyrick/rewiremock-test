import webpack from 'webpack';
import rewireMockPlugin from 'rewiremock/webpack/plugin';
import * as path from 'path';

module.exports = {
    context: `${__dirname}/src`,

    mode: 'development',

    resolve: {
        extensions: ['.js'],
        modules: ['./node_modules'],
        alias: {
            js: path.resolve(__dirname, './src/js'),
        }
    },

    resolveLoader: {
        modules: ['./node_modules']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    modules: false,
                                    targets: {
                                        browsers: ['Chrome >= 60', 'Safari >= 10.1', 'iOS >= 10.3', 'Firefox >= 54', 'Edge >= 15']
                                    }
                                }
                            ]
                        ],
                        plugins: ['rewiremock/babel']
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new rewireMockPlugin()
    ]
}