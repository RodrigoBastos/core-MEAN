/**
 * Created by handtalk on 29/10/15.
 */

var gulp          = require('gulp');
var sass          = require('gulp-sass');
var rename        = require('gulp-rename');
var uglify        = require('gulp-uglify');
var include       = require('gulp-include');
var autoprefixer  = require('gulp-autoprefixer');


gulp.task('css', function (done) {
  gulp.src('./client/source/scss/*.scss')
    .pipe(sass({
      includePaths: ['client/source/scss',  'client/source/components/'],
      outputStyle: 'compressed',
      errLogToConsole: true
    }))
    .pipe(autoprefixer({browsers: ['last 2 versions', 'ie 10']}))
    .pipe(rename({extname:'.min.css'}))
    .pipe(gulp.dest('./client/public/css'))
    .on('end', done)
  ;
});

gulp.task('js', function (done) {
  gulp.src('./client/source/js/*.js')
    .pipe(include())
    //.pipe(uglify({mangle: false}))
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest('./client/public/js'))
    .on('end', done)
  ;

});
