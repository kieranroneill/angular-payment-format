'use strict';

module.exports = function(gulp, config, plugins) {
    gulp.task('connect', function() {
        plugins.connect.server({
            port: 8080,
            root: 'demo',
            livereload: true
        });
    });
};