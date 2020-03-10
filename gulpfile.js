
var gulp = require('gulp'),
plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
  browserSync({
    port: 3800,
    server: {
       baseDir: "src/"
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('styles', function(){
  gulp.src(['src/static/scss/*.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('src/app/css/'))
    .pipe(browserSync.reload({stream:true}))
});


gulp.task('default', ['browser-sync','styles'], function(){
  gulp.watch("src/static/**/*.scss", ['styles']);
  gulp.watch("src/app/*.html", ['bs-reload']);
  gulp.watch("src/app/**/*.js", ['bs-reload']);
})
