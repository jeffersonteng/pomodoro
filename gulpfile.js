var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');

gulp.task('sass', function(){
    return gulp.src('scss/base.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('css/'))
});

gulp.task('clean', function() {
    return del(['css/']);
});

gulp.task('default', ['clean'], function() {
    gulp.start('sass');
});