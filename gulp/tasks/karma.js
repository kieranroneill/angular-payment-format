'use strict';

var karma = require('karma').server;

module.exports = function(gulp, config, plugins) {
    gulp.task('karma', function () {
        karma.start({ configFile : config.Paths.karmaConf, singleRun: true });
    });
};