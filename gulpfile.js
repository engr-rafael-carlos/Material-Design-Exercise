// # Required # //
var gulp = require('gulp'),
 compass = require('gulp-compass'),
  uglify = require('gulp-uglify'), 
  rename = require('gulp-rename');

// # Tasks # //
gulp.task('scripts', function(){
    gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});

gulp.task('styles', function(){
    gulp.src('app/scss/style.scss')
        .pipe(compass({
            config_file:'./config.rb',
            css: 'app/css',
            sass: 'app.scss',
            require: ['susy']
        }))
        .pipe(gulp.dest('app/css'))
});

// # Watch Tasks # //
gulp.task('watch', function(){
    gulp.watch('app/js/**/*.js', ['scripts']);
    gulp.watch('app/scss/**/*.scss', ['styles']);
});

// ################ //
// # Default Task # //
// ################ //
gulp.task('default',['scripts', 'styles', 'watch']);