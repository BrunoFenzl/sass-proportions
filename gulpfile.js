const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

const source = './src/main.scss';
const destination = './dist/';
const main = 'assets/css/styles.less';

gulp.task('css', () => {
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

gulp.task('watch', () => {
	gulp.watch('./src/*.scss', ['css']);
});

gulp.task('default', ['css']);