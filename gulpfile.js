//Instanciando o Gulp e plugins
var gulp = require('gulp');
const workboxBuild = require('workbox-build');

gulp.task('service-worker', function () {
    return workboxBuild.generateSW({
        globDirectory: './',
        globPatterns: [
            '*.{html,json,js,css}',
        ],
        swDest: 'sw.js',
    });
});

// Task 'default'
gulp.task('default', gulp.parallel('service-worker'));
