var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var less = require('gulp-less');
var path = require('path');
var LessAutoprefix = require('less-plugin-autoprefix');


var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions','>0.5%'] });

gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
    	plugins: [autoprefix]
    }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('default', function () {
    watch('./less/**/*.less', batch(function (events, done) {
        gulp.start('less', done);
    }));
}); 

 