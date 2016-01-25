var gulp = require('gulp');
var ts = require('gulp-typescript');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');

var tsconfig = {
	module: "system",
	moduleResolution: "node",
	emitDecoratorMetadata: true,
	experimentalDecorators: true,
	target: "es5"
};
var pathToTs = './app/**/*.ts';
var pathToSass = './app/**/*.scss';

function sassCompile() {
	gulp.src(pathToSass)
		.pipe(sourcemaps.init())
			.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./app/'));
}

function tsCompile() {
	gulp.src(pathToTs)
		.pipe(sourcemaps.init())
			.pipe(ts(tsconfig))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./app/'));
}

function watcher() {
	watch(pathToSass, sassCompile);
	watch(pathToTs, tsCompile);
}

gulp.task('sass', sassCompile);
gulp.task('ts', tsCompile);
gulp.task('watch', watcher);

gulp.task('default', ['ts', 'sass', 'watch']);