var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var config = require('../gulp-config');

var bundler = watchify(browserify({
  entries: [config.src],
  transform: [babelify],
  extensions: ['.js'],
  debug: true,
  cache: {},
  packageCache: {},
  fullPaths: true
}));

var error = function(err) {
  console.log('Error: ', err);
}

var bundle = function() {
  return bundler
    .bundle()
    .on('error', error)
    .pipe(source(config.output))
    .pipe(gulp.dest(config.dest))
}

bundler.on('update', bundle);

module.exports = function() {
  bundle();
}
