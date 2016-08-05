'use strict';

module.exports = function(gulp, config, plugins) {
    /**
     * Copies the scripts for development.
     */
    gulp.task('copy', function () {
        return plugins.streamqueue({ objectMode: true },
            gulp.src(plugins.mainBowerFiles('**/*.js')), // Bower files.
            gulp.src(config.Paths.dist + '/' + config.FileName.unminified))
            .pipe(gulp.dest(config.Paths.demo + '/js'))
            .pipe(plugins.connect.reload());
    });
};