var gulp = require('gulp');
var ts = require('gulp-typescript');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('sass', function() {
	gulp.src('./css/**/*.scss')
		.pipe(sass({outFile: 'main.css'}).on('error', sass.logError))
		.pipe(gulp.dest('./css'));
});

gulp.task('ts', function() {
	gulp.src('./ts/**/*.ts')
		.pipe(ts({
			noImplicitAny: true,
			outFile: 'app.js'
		}))
		.pipe(gulp.dest('./js'));
});

gulp.task('watch', function() {
	watch('./css/**/*.scss', function() {
		gulp.src('./css/**/*.scss')
			.pipe(sass({outFile: 'main.css'}).on('error', sass.logError))
			.pipe(gulp.dest('./css'));
	});
	
	watch('./ts/**/*.ts', function() {
		gulp.src('./ts/**/*.ts')
			.pipe(ts({
				noImplicitAny: true,
				outFile: 'app.js'
			}))
			.pipe(gulp.dest('./js'));
	});
});

gulp.task('default', ['ts', 'sass', 'watch']);