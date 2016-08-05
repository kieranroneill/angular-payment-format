'use strict';

module.exports = function(gulp, config, plugins) {
    /**
     * Lint the the scripts.
     */
    gulp.task('lint', function() {
        return gulp.src(config.Paths.main)
        .pipe(plugins.eslint({rulePaths: ['./']}))
        .pipe(plugins.eslint.formatEach());
    });
};