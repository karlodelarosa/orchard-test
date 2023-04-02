// const gulp = require('gulp')
const { task, src, dest, watch, series } = require('gulp')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename')

// Styles
const styles = () => {
    return src('./src/scss/main.scss')
        .pipe(sass({outputStyled: 'nested'}))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(rename('main.css'))
        .pipe(dest('./dist/css'))
}

// Scripts
const scripts = () => {
    return src('./src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(dest('./dist/js/'))
}


// watch
const watchTasks = () => {
    watch(
        ['./src/scss/**/*.scss', './src/js/**/*.js'],
        series(styles, scripts)
    )
}

exports.default = series(styles, scripts, watchTasks)

