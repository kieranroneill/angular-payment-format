'use strict';

module.exports = function(gulp, config, plugins) {
    /**
     * Remove everything from the dist directory.
     */
    gulp.task('clean', function(done) {
        return plugins.del(config.Paths.dist + '/**', done);
    });
};