var gulp = require('gulp');
var config = require('../gulp-config');

module.exports = function() {
  gulp.watch(config.scss, ['sass']);
};
