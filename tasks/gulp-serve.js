var gulp = require('gulp');
var server = require('gulp-server-livereload');
var config = require('../gulp-config');

module.exports = function() {
  gulp.src('')
    .pipe(server({
      livereload: {
        enable: true,
        filter: function(filePath, cb) {
          if(/bundle.js/.test(filePath)) {
            cb(true)
          } else if(/style.css/.test(filePath)){
            cb(true)
          }
        }
      },
      open: true
    }));
};
