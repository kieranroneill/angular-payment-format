'use strict';

module.exports = {
    FileName: {
        unminified: 'ng-payment-format.js',
        minified: 'ng-payment-format.min.js'
    },

    Paths: {
        demo: './demo',
        dist: './dist',
        karmaConf: __dirname + '/../karma.conf.js',
        main: [
            './src/main.js',
            './src/**/*.js'
        ],
        watch: './src/**/*.js'
    },

    Plugins: {
        loadPlugins: {
            pattern: [
                'consologger',
                'del',
                'gulp-*',
                'gulp.*',
                'main-bower-files',
                'run-sequence',
                'streamqueue'
            ]
        }
    }
};