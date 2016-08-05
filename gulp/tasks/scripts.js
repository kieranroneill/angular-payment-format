'use strict';

module.exports = function(gulp, config, plugins) {
    /**
     * Copies the scripts and minfies the production.
     */
    gulp.task('scripts', function () {
        var minifiedStream = gulp.src(config.Paths.main)
            .pipe(plugins.concat(config.FileName.minified))
            .pipe(plugins.iife())
            .pipe(plugins.uglify({ 'mangle': false, preserveComments: false }));
        var devStream = gulp.src(config.Paths.main)
            .pipe(plugins.concat(config.FileName.unminified))
            .pipe(plugins.iife());

        return plugins.streamqueue({ objectMode: true }, minifiedStream, devStream)
            .pipe(gulp.dest(config.Paths.dist))
            .pipe(plugins.connect.reload());
    });
};