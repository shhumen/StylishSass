// node_modules klasörü içerisinden gulp kütüphanesini çağırıyoruz
const { src, dest, watch, series } = require('gulp')

const purgecss = require('gulp-purgecss')
const cssnano = require('gulp-cssnano')

// gulp-sass kütüphanesini çağırıyoruz
const sass = require('gulp-sass')(require('sass'))

// hangi dosyanın, hangi dosya ile değiştirileceğini belirtiyoruz
function buildStyles() {
  return src('sass/**/*.scss')
    .pipe(sass())
    .pipe(purgecss({ content: ['*.html'] }))
    .pipe(cssnano())
    .pipe(dest('css'))
}

//  /* /**/ means folders in sass */   */

// index.scss dosyasında değişiklik olduğunda buildStyles fonksiyonunu çalıştır

function watchTask() {
  return watch(['sass/**/*.scss', '*.html'], buildStyles)
}

// default olarak çalıştırılacak fonksiyonu belirtiyoruz
exports.default = series(buildStyles, watchTask)
