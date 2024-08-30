const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function compileSass() {
    return gulp.src('./source/style/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/style/'))
}

function compressImages() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images/'))
}

function compressJS() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts/'))
}

exports.default = function() {
    gulp.watch('./source/style/main.scss', {ignoreInitial: false }, gulp.series(compileSass));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(compressImages));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(compressJS));
}