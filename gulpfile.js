var gulp = require('gulp');

gulp.task('build', require('./tasks/gulp-build'));
gulp.task('serve', require('./tasks/gulp-serve'));
gulp.task('sass', require('./tasks/gulp-sass'));

gulp.task('default', ['build', 'serve', 'sass', 'watch']);
gulp.task('watch', require('./tasks/gulp-watch'));
