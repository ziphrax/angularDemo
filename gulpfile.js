var gulp = require('gulp');
gulp.task('default',function(){
  return gulp.src('app/main.js')
    .pipe(gulp.dest('./public/'))
});

gulp.task('watch',['default'],function(){
  gulp.watch('app/main.js',['default']);
});
