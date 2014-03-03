var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    watch = require('gulp-watch'),
    jshint = require('gulp-jshint'),
    jasmine = require('gulp-jasmine'),
    gutil = require('gulp-util'),
    notify = require('gulp-notify'),
    karma = require('gulp-karma');

var testFiles = [ 'src/*.js', 'tests/*.js' ];

gulp.task('default', function () {
    return gulp.src(testFiles)
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'watch'
        }));
});
