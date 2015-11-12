var gulp = require('gulp');
var ts = require('gulp-typescript');
var sass = require('gulp-sass');

gulp.task('sass', function() {
	gulp.src('./**/*.scss')
		// .pipe(sass({}))
		.pipe(sass({outFile: 'main.css'}).on('error', sass.logError))
		.pipe(gulp.dest('./css'));
});

gulp.task('ts', function() {
	gulp.src('./**/*.ts')
		.pipe(ts({
			noImplicitAny: true,
			outFile: 'app.js'
		}))
		.pipe(gulp.dest('./js'));
});

gulp.task('watch', function() {
	gulp.watch('sass');
	gulp.watch('ts');
});

gulp.task('default', ['watch', 'scripts', 'images']);