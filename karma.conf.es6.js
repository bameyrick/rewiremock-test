import * as path from 'path';
import webpack from './webpack.config';

export default function(config) {
    config.set({
        basePath: path.resolve('./src'),

        files: [
            'tests/index.spec.js'
        ],

        frameworks: ['mocha', 'chai-spies', 'chai'],

        preprocessors: {
            'tests/index.spec.js': ['webpack'],
        },

        webpack,

        plugins: [
            'karma-webpack',
            'karma-mocha',
            'karma-chai',
            'karma-chai-spies',
            'karma-chrome-launcher'
        ],

        browsers: ['Chrome']
    })
}