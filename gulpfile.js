// Requires
var gulp = require('gulp');

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

// Variables de chemins
var source = './src/main.scss'; // dossier de travail
var destination = './dist/'; // dossier à livrer
var main = 'assets/css/styles.less'; // fichier Less principal

// Tâche "css" = LESS + autoprefixer + CSScomb + beautify + minify
gulp.task('css', function () {
  return gulp.src(source)
    .pipe(plugins.sass())
    .pipe(plugins.csscomb())
    .pipe(plugins.cssbeautify({indent: '  '}))
    .pipe(plugins.autoprefixer())
    .pipe(gulp.dest(destination))
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(plugins.csso())
    .pipe(gulp.dest(destination));
});

// Watch Files For Changes
gulp.task('watch', function () {
	gulp.watch('./src/*.scss', ['css']);
});

// Tasks
gulp.task('default', ['css']);