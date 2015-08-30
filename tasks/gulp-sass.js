var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var config = require('../gulp-config');

module.exports = function() {
  gulp.src(config.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(concat(config.cssOutput))
    .pipe(gulp.dest(config.dest));
}
