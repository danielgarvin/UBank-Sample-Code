var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('bootstrap', function(){
    return gulp.src('assets/scss/bootstrap.scss')
      .pipe(sass()) 
      .pipe(gulp.dest('assets/css/'))
  });

  gulp.task('main', function(){
    return gulp.src('assets/scss/main.scss')
      .pipe(sass()) 
      .pipe(gulp.dest('assets/css/'))
  });

  gulp.task('watch', function(){
    gulp.watch('assets/scss/**/*.scss', ['bootstrap', 'main']); 
  });

  // gulp.task('default', [`bootstrap`, `main` `watch`], function (){
  //   console.log('Compiling Assets');
  // });