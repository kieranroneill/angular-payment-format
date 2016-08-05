'use strict';

module.exports = {
    FileName: {
        unminified: 'ng-payment-format.js',
        minified: 'ng-payment-format.min.js'
    },

    Paths: {
        main: [
            './src/main.js',
            './src/**/*.js'
        ],
        watch: './src/**/*.js',
        dist: './dist',
        karmaConf: __dirname + '/../karma.conf.js'
    },

    Plugins: {
        loadPlugins: {
            pattern: [
                'consologger',
                'del',
                'gulp-*',
                'gulp.*',
                'run-sequence',
                'streamqueue'
            ]
        }
    }
};