
var gulp = require("gulp");
var uglify = require('gulp-uglify');
var minify = require("gulp-minify");
var css = require("gulp-clean-css");
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename')


gulp.task('js', async function() {
    return gulp.src('js/*.js', { allowEmpty: true })
        .pipe(minify())
        .pipe(concat('script.min.js'))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('css', async function(){
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(rename('style.min.css'))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('dist/css'))
});
