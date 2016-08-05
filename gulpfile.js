'use strict';

var config = require('./gulp/config');

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')(config.Plugins.loadPlugins);

require('./gulp/tasks/clean')(gulp, config, plugins);
require('./gulp/tasks/connect')(gulp, config, plugins);
require('./gulp/tasks/karma')(gulp, config, plugins);
require('./gulp/tasks/karma-watch')(gulp, config, plugins);
require('./gulp/tasks/lint')(gulp, config, plugins);
require('./gulp/tasks/scripts')(gulp, config, plugins);

gulp.task('default', function(done) {
    plugins.runSequence(
        ['clean', 'lint'],
        ['connect', 'scripts'],
        done
    );

    if(plugins.util.env.watch) {
        var logger = new plugins.consologger();
        var onWatchChange = function(event) {
            logger.grey('File').yellow(event.path).grey('changed').print();
        };

        // Watch for changes.
        gulp.watch(config.Paths.main, ['lint', 'scripts'])
            .on('change', onWatchChange);

        logger.yellow('Watching for file changes... Use Ctrl+C to exit.').print();
    }
});

gulp.task('build', function(done) {
    plugins.runSequence(
        ['clean'],
        ['scripts'],
        done
    );
});

gulp.task('test', function(done) {
    plugins.runSequence(
        ['clean'],
        ['scripts'],
        ['karma'],
        done
    );
});
