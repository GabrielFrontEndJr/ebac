const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const image = 'gulp-image'

function tarefasCSS(cb) {

    return gulp.src('./vendor/css/*.css')
        .pipe(concat('libs.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min'})) // libs.min.css
        .pipe(gulp.dest('./dist/css'))

}


function tarefasJS(){

    return gulp.src('./vendor/js/*.js')
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min'})) //libs.min.js
        .pipe(gulp.dest('./dist/js'))
}

function tarefasHTML(callback){

    gulp.src('./*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./dist'))

    return callback()

}

function tarefasImagem(){
    
    return gulp.src('./vendor/images/*')
        .pipe(gulp.dest('./dist/images'))
}

exports.html = tarefasHTML
exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem
