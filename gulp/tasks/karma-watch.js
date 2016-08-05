'use strict';

var karma = require('karma').server;

module.exports = function(gulp, config, plugins) {
    gulp.task('karma-watch', function () {
        karma.start({ configFile : config.Paths.karmaConf, singleRun: false });
    });
};